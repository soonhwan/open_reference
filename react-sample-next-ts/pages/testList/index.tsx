import type { NextPage } from "next";
import React, { FC, useEffect, useState, useRef } from 'react';
import { TestListWrap } from './Styles';
import {WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List, ListRowProps} from 'react-virtualized';

import listData from '../../mockData/response_1644294867507.json';

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const cache = new CellMeasurerCache({
    defaultWidth: 100,
    fixedWidth: true
});


const TestList:NextPage = () => {
    //const [list, setList] = useState(listData.data);
    const [posts, setPosts] = useState<Post[]>([]);
    
    const listRef = useRef<List | null>(null);

    const rowRenderer = ({ index, key, parent, style }: ListRowProps) => {
        return (
            <CellMeasurer cache={cache} parent={parent} key={key} columnIndex={0} rowIndex={index} className="list">
                <div style={style} className="box">
                    <div style={{ padding: 8, marginBottom: 8, color: 'white', backgroundColor: '#282c34' }}>
                        <div>
                            index: {index}
                        </div>
                        <div>
                            id: {posts[index].id}
                        </div>
                        <div>
                            userId: {posts[index].userId}
                        </div>
                        <div>
                            title: {posts[index].title}
                        </div>
                        <div>
                            body: {posts[index].body}
                        </div>
                    </div>
                </div>
            </CellMeasurer>
        );
    };

    const addPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            const data = response.json();

            data.then((newPosts) => {
                console.log('addPosts posts ===> ', posts);
                setPosts([
                    ...posts,
                    ...newPosts
                ]);
            });
        });
    };

    useEffect(() => {
        const config = {
            heders: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        fetch('https://jsonplaceholder.typicode.com/posts', config).then((response) => {
        //fetch(listData, config).then((response) => {
        //fetch(listData, config).then((response) => {
            console.log('response ==>' , response);
           const data = response.json();
           //console.log('useEffect posts ===> ', data);

           data.then((posts) => {
            setPosts(posts);
           });
        });
    }, []);

    return (
        <TestListWrap>
            react-virtualized example <button onClick={addPosts}>add</button> <br /><br />
            <WindowScroller>
                {({ height, scrollTop, isScrolling, onChildScroll }) => (
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <List
                                ref={listRef}
                                autoHeight
                                height={height}
                                width={width}
                                isScrolling={isScrolling}
                                overscanRowCount={0}
                                onScroll={onChildScroll}
                                scrollTop={scrollTop}
                                rowCount={posts.length}
                                rowHeight={cache.rowHeight}
                                rowRenderer={rowRenderer}
                                deferredMeasurementCache={cache}
                            />
                        )}
                    </AutoSizer>
                )}
            </WindowScroller>
        </TestListWrap>
    );
}

export default TestList;  
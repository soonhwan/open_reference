import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const ColoredScrollbars = (props, ...rest) =>{
    const [state, setState] = useState({ top: 0 })
    const renderView = ({ style, ...props }) =>{
      const { top } = state;
      const viewStyle = {
        paddingRight: 20,
      };      
      return (
        <div
          className="custom-scroll"
          style={{ ...style, ...viewStyle }}
          {...props}/>
      );
    }

    const handleUpdate = (values) =>{
      const { top } = values;
      setState({ top });
    }

    
    return (
      <Scrollbars
        renderView={renderView}
        renderThumbVertical={props => <div className="thumb-vertical" {...props} style={{width: 4, backgroundColor: '#3f64c3'}} />}
        renderTrackVertical={props => <div className="track-vertical" {...props} style={{width: 4, backgroundColor: '#e6e9f0'}}  />}
        autoHide={false}
        autoHeight
        autoHeightMax={props.autoHeightMax !== undefined ? props.autoHeightMax : 409}
        onUpdate={handleUpdate}
        universal={true}
        {...props} />
    );
    
}
export default ColoredScrollbars
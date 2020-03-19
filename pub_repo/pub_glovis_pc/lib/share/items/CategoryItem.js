import { useState, useCallback, useContext } from 'react'
import { CategoryContext } from './DynamicCategory'

const CategoryItem = ({category}) => {
  const [show, setShow] = useState(true)
  const { categoryNum, setCategoryNum } = useContext(CategoryContext)

  const handleClick = useCallback((e) => {
    e.preventDefault()
    setShow(false)
    setCategoryNum(categoryNum-1)
  }, [show, categoryNum])

  return (
    <>
      {
        show
          ? <ul className="del-tag">
              {category.map((v, i) => <li key={i}>{v}</li>)}
              <li><i className="ico-del" onClick={handleClick}></i></li>
            </ul>
          : null
      }
    </>
  )
}

export default CategoryItem
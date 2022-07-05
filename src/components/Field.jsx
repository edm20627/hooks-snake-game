const Field = ({ fields }) => {
  return (
    <div className="field">
      {
        fields.map((row, rowIndex) => {
          return row.map((column, columnIndex) => {
            return <div key={`${rowIndex}-${columnIndex}`} className={`dots ${column}`}></div>
          })
        })
      }
    </div>
  )
}

export default Field
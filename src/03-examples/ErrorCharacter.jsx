export const ErrorCharacter = ({ error }) => {

  return (
    <>
        <div className="alert alert-danger text-center">
            { error }
        </div>
    </>
  )
}

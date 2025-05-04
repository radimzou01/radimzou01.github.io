import AddCropButton from "./AddCropButton.jsx"

const EmptyScreen = ({onHandleShowAddScreen}) => {
    return (
        <>
            <AddCropButton onClick={onHandleShowAddScreen}/>
            <p>Just add some crop, plantery-bro!</p>
        </>

    )
}

export default EmptyScreen
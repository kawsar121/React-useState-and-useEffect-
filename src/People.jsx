export default function People({manush}){
    // destructure korbo
    const {name,email} = manush; //Simple way
    return(
        <div>
            {/* <p>Name : {manush.name}</p> #evave kora jabe but simple way ase */}
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}
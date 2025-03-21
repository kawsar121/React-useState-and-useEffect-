import './people.css'

export default function People({manush}){
    // destructure korbo
    const {name,email} = manush; //Simple way
    return(
        <div className="pe">
            {/* <p>Name : {manush.name}</p> #evave kora jabe but simple way ase */}
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}
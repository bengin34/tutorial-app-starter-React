import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import axios from "axios"
import Modal from "./Modal"
import { useState } from "react"

const TutorialList = ({tutorials, BASE_URL,takeTutorials}) => {
  const deleteTutorial = (id) => {
      deleteTutorialFromApi(id)
      // takeTutorials()
  }

  const deleteTutorialFromApi = async (id) => {
    await axios.delete(`${BASE_URL}${id}/`)
    await takeTutorials()
  }
  
  const [editTutorialData, setEditTutorialData] = useState({})

  const [selectedTutorial,setSelectedTutorial] = useState(null);

  const editTutorial= async (tutorial) => {
   setSelectedTutorial(tutorial)
  }

const handleSave = async (updateTutorial) => {
  await axios.put(`${BASE_URL}${updateTutorial.id}/`, updateTutorial)
  await takeTutorials();
  setSelectedTutorial(null)
}


  // const editTutorial = async (id) => {
  //    const response =  await axios.put(`${BASE_URL}${id}/`, {title:"yeniEdit", description:"desc" })
  //   console.log(response)
  // }


  return (

    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    // onClick={() => editTutorial(id)}
                    onClick={() => setEditTutorialData(item)}
                    data-bs-toggle="modal" 
                    data-bs-target="#edit-btn"
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    <Modal tutorial={editTutorialData}
    onSave={async (updateTutorial) => {
      await axios.put(`${BASE_URL}${updateTutorial.id}/`, updateTutorial)
      await takeTutorials()
    }} />
    </div>
  )
}

export default TutorialList

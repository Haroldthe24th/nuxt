import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader} from "semantic-ui-react";
import {useState,useEffect} from "react";
import { useRouter } from "next/router"; //next js hook to route to different routes


const NewNote = () => {
    const [ form, setForm] = useState({title:"", description: ""});
    const [ isSubmiting, setIsSub] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();
    useEffect(() =>{
        if(isSubmiting) {
            if(Object.keys(errors).length === 0){
                createNote();

                alert("Success");
            }else {
                setIsSub(false);
            }
        }
    },[errors]);
    const createNote = async () =>{
      try {
          const res = await fetch("http://localhost:3000/api/notes", {
              method: "POST",
              headers: {
                  "Accept": "application/json",
                  "Content-Type" : "application/json"
              },
              body: JSON.stringify(form)
          })
          router.push("/");

      }  catch (error){
console.log(error)
      }
        return;
    }
    const handleSub =(e)=>{
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSub(true);
        return;
    }
    const handleChange= (e)=>{
        return setForm({
            ...form,
             [e.target.name]: e.target.value
        });
        
    }
    const validate = () =>{
        let err = {};

        if(!form.title ){
            err.title = "Title is required";

        }
        if(!form.description){
            err.description = "Description is required";
        }
        return err;
        }
        
    
    return (
        <div className="form-container">
            <h1>Create Note</h1>
            <div>
                {
                    isSubmiting
                    ? <Loader active inline="centered"/>
                    : <Form onSubmit={handleSub}>
                        <Form.Input
                         fluid
                         error={ errors.title ?
                             { content: "Please entrer a title", pointing: "below"} :
                              null} 
                         label="Title"
                         placeholder="Title"
                         name="title"
                         onChange={handleChange}
                         id="form">
                           
                        </Form.Input>
                        <Form.TextArea 
                             fluid
                             label="Description"
                             name="description"
                             error={ errors.description ?
                                { content: "Please entrer a description", pointing: "below"} :
                                 null} 
                             onChange={handleChange}
                             />
                             <Button type="submit">
                                 Create
                             </Button>
                      </Form>
                }
            </div>
        </div>
    )
}

    export default NewNote;
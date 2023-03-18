import './contact.css'
import './buttonContact.css'

export default function Contact(){
    return(
        <>
            <div className='body'>
                <form>
                    
                    <div className='form-group'>
                        <label>
                            Name:
                        </label>
                        <input/>
                    </div>

                    <div className='form-group'>
                        <label>Email:</label>
                        <input/>
                    </div>

                    <div className='messbox'>

                        <label>Message:</label>
                        <textarea className='tarea'/>
                    </div>


                    </form>
                    <button className='button'>
                        SEND
                    </button>
            </div>
        </>
    )

}
import React from 'react'

const Contact = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
       <section className="contacts-container">
        <div className="wrapper-contacts">
        <div className="form">
          <form method="POST">
          <h1>send a message</h1>
          <div className="form-group">
            <label>Full names</label>
            <input type="text" name="full_names" />
          </div>
           <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
           </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" cols="50" rows="5"></textarea>
          </div>
          <input type="submit" className="btn"/>
        </form>
        </div>
        </div>
      </section>
      </>
  )
}

export default Contact
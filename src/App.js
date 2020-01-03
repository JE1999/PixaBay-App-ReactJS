import React from 'react'

function App() {
  return (
    <div>
      <div className="col-12 je-img">
        <div className="container">
          <form class="">
            <div style={{height: "450px"}} class="row d-flex align-content-center flex-wrap">
              <div class="col-sm-12 col-md-8 p-0 m-1 shadow">
                <input type="text" class="form-control form-control-lg" placeholder="Buscar imagen..."/>
              </div>
              <div class="col-sm-12 col-md-3 p-0 m-1 shadow">
                <button type="submit" className="btn btn-secondary btn-lg btn-block">Buscar <span uk-icon="search"></span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

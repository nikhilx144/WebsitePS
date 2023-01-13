import React from 'react'
import PaneerButterMasala from '../assets/images/paneer_butter_masala.jpg'
import DoodhPeda from '../assets/images/doodh_peda.jpg'
import MacnCheese from '../assets/images/mac&cheese.jpg'

function Recipes() {
  return (
    <div className="container mt-5">
        <div className="card">
          <div className="row">
            <div className="col-md-4" style={{ backgroundImage: `url(${ PaneerButterMasala })`}}>
            </div>
            <div className="col-md-8">
              <h2 className="card-title mt-3">Paneer Butter Masala</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
              <button className="btn btn-success">Read More</button>
            </div>
          </div>
        </div>
        <div className="card mt-5">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-8">
              <h2 className="card-title mt-3">Cake</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
              <button className="btn btn-success">Read More</button>
            </div>
          </div>
        </div>
        <div className="card mt-5">
          <div className="row">
            <div className="col-md-4" style={{ backgroundImage: `url(${ MacnCheese }})` }}>
            </div>
            <div className="col-md-8">
              <h2 className="card-title mt-3">Mac & Cheese</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto enim laudantium velit natus, rerum placeat eius magnam maxime suscipit, corrupti fuga. Vero cum tenetur, molestias doloremque voluptate rem totam explicabo similique sapiente ullam cumque deleniti architecto beatae esse nisi expedita, quod non iste ipsa quam facere repellat harum est? Animi?</p>
              <button className="btn btn-success">Read More</button>
            </div>
          </div>
        </div>
        <div className="card mt-5">
          <div className="row">
            <div className="col-md-4" style={{ backgroundImage: `url(${ DoodhPeda })` }}>
            </div>
            <div className="col-md-8">
              <h2 className="card-title mt-3">Doodh Peda</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores error iusto nemo possimus enim neque, inventore facere facilis sapiente dicta molestiae ratione! Eos ea sequi iste natus distinctio vero vitae sed recusandae. Recusandae dignissimos nulla consequuntur, nemo voluptatem quam eligendi tempora, mollitia eveniet beatae sunt fugiat, quas eos impedit aperiam?</p>
              <button className="btn btn-success">Read More</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Recipes
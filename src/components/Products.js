import React, { useState } from "react";
import "../styles/Products.css";
import { Link } from "react-router-dom";
import Butter from "../assets/images/butter.jpeg";
import Cheese from "../assets/images/cheese.jpg";
import ButterMilk from "../assets/images/buttermilk.jpg";
import Cream from "../assets/images/cream.jpg";

function Products() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row">
          <div
            className="col-md-4"
            style={{ backgroundImage: `url(${Butter})` }}
          ></div>
          <div className="col-md-8">
            <h2 className="card-title mt-3">Butter</h2>
            <div>
              <button
                type="button"
                className="btn btn-success"
                data-toggle="collapse"
                data-target="#target"
              >
                Read More
              </button>
              <div className="collapse" id="target">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5">
        <div className="row">
          <div
            className="col-md-4"
            style={{ backgroundImage: `url(${Cream})` }}
          ></div>
          <div className="col-md-8">
            <h2 className="card-title mt-3">Cream</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
              <span id="dots">...</span>
              <span id="more">
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
                nec congue eget, auctor vitae massa. Fusce luctus vestibulum
                augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper
                ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                sed ornare turpis. Donec vitae dui eget tellus gravida
                venenatis. Integer fringilla congue eros non fermentum. Sed
                dapibus pulvinar nibh tempor porta.
              </span>
            </p>
            <button className="btn btn-success">Read More</button>
          </div>
        </div>
      </div>
      <div className="card mt-5">
        <div className="row">
          <div
            className="col-md-4"
            style={{ backgroundImage: `url(${ButterMilk}})` }}
          ></div>
          <div className="col-md-8">
            <h2 className="card-title mt-3">Butter Milk</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim laudantium velit natus, rerum placeat eius magnam maxime
              suscipit, corrupti fuga. Vero cum tenetur, molestias doloremque
              voluptate rem totam explicabo similique sapiente ullam cumque
              deleniti architecto beatae esse nisi expedita, quod non iste ipsa
              quam facere repellat harum est? Animi?
            </p>
            <button className="btn btn-success">Read More</button>
          </div>
        </div>
      </div>
      <div className="card mt-5">
        <div className="row">
          <div
            className="col-md-4"
            style={{ backgroundImage: `url(${Cheese})` }}
          ></div>
          <div className="col-md-8">
            <h2 className="card-title mt-3">Cheese</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              error iusto nemo possimus enim neque, inventore facere facilis
              sapiente dicta molestiae ratione! Eos ea sequi iste natus
              distinctio vero vitae sed recusandae. Recusandae dignissimos nulla
              consequuntur, nemo voluptatem quam eligendi tempora, mollitia
              eveniet beatae sunt fugiat, quas eos impedit aperiam?
            </p>
            <button className="btn btn-success">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

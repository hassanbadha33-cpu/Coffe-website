import "./Menu.css";
import menu1 from '../../assets/menu-1.png'
import menu2 from '../../assets/menu-2.png'
import menu3 from '../../assets/menu-3.png'

function Menu() {
  return (
    <section className="menu-section">
      <h2 className="menu-title">
        OUR <span>MENU</span>
      </h2>

      <div className="menu-container">
        <div className="menu-card">
          <img src={menu1} />
          <h3>Espresso</h3>
          <p className="price">
            $15.99 <span>$20.99</span>
          </p>
          <button>Add to Cart</button>
        </div>

        <div className="menu-card">
          <img src={menu2} />
          <h3>Black Coffee</h3>
          <p className="price">
            $15.99 <span>$20.99</span>
          </p>
          <button>Add to Cart</button>
        </div>

        <div className="menu-card">
          <img src={menu3} />
          <h3>Mocha</h3>
          <p className="price">
            $15.99 <span>$20.99</span>
          </p>
          <button>Add to Cart</button>
        </div>




   <div className="menu-card">
          <img src={menu1} />
          <h3>Mocha</h3>
          <p className="price">
            $15.99 <span>$20.99</span>
          </p>
          <button>Add to Cart</button>
        </div>




   <div className="menu-card">
          <img src={menu2} />
          <h3>Mocha</h3>
          <p className="price">
            $15.99 <span>$20.99</span>
          </p>
          <button>Add to Cart</button>
        </div>



           <div className="menu-card">
          <img src={menu3} />
          <h3>Mocha</h3>
          <p className="price">
            $15.99 <span>$20.99</span>
          </p>
          <button>Add to Cart</button>
        </div>


      </div>
    </section>
  );
}

export default Menu;

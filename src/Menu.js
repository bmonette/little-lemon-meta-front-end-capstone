import React from "react";
import "./Menu.css";

const menuItems = [
  {
    name: "Bruschetta",
    img: "bruschetta.png",
    desc: "A classic Italian appetizer featuring toasted bread topped with a fresh mix of diced tomatoes, garlic, basil, and olive oil",
    price: "$4.99",
  },
  {
    name: "Greek Salad",
    img: "greek-salad.png",
    desc: "A refreshing mix of cucumbers, tomatoes, red onions, olives, and feta cheese, tossed with olive oil and herbs.",
    price: "$8.99",
  },
  {
    name: "Paella",
    img: "paella.png",
    desc: "A traditional Spanish rice dish cooked with saffron, vegetables, and a mix of seafood or chicken.",
    price: "$14.99",
  },
  {
    name: "Falafel",
    img: "falafel.png",
    desc: "Crispy chickpea fritters seasoned with herbs and spices, served with tahini or hummus.",
    price: "$11.99",
  },
  {
    name: "Pikilia",
    img: "pikilia.png",
    desc: "A Mediterranean sampler platter featuring dips like hummus, tzatziki, and baba ghanoush, served with pita.",
    price: "$9.99",
  },
  {
    name: "Moussaka",
    img: "moussaka.png",
    desc: "A layered casserole made with eggplant, seasoned ground beef, and creamy béchamel sauce.",
    price: "$11.49",
  },
  {
    name: "Chicken Souvlaki",
    img: "souvlaki.png",
    desc: "Marinated grilled chicken skewers served with lemon rice, Greek salad, and tzatziki sauce.",
    price: "$12.49",
  },
  {
    name: "Grilled Halloumi",
    img: "grilled-halloumi.png",
    desc: "Firm, salty cheese grilled until golden, served with fresh herbs and lemon wedges.",
    price: "$11.99",
  },
  {
    name: "Couscous Salad",
    img: "couscous.png",
    desc: "A light, fluffy couscous salad with diced vegetables, chickpeas, herbs, and lemon dressing.",
    price: "$9.49",
  },
  {
    name: "Kofta Kebabs",
    img: "kofta.png",
    desc: "Spiced ground meat skewers grilled and served with rice, hummus, and pita slices.",
    price: "$12.99",
  },
  {
    name: "Stuffed Grape Leaves",
    img: "stuffed-leaves.png",
    desc: "Tender grape leaves filled with herbed rice, served with tzatziki and warm pita.",
    price: "$10.99",
  },
  {
    name: "Shakshuka",
    img: "shakshuka.png",
    desc: "A hearty dish of poached eggs in a rich tomato sauce with peppers, onions, and Mediterranean spices.",
    price: "$10.49",
  },
  {
    name: "Beef Gyros",
    img: "gyros.png",
    desc: "Thinly sliced seasoned beef wrapped in warm pita, with tomatoes, onions, and creamy tzatziki.",
    price: "$11.49",
  },
  {
    name: "Lamb Chops",
    img: "lamb-chops.png",
    desc: "Juicy grilled lamb chops served with seasoned couscous and a side of sautéed Mediterranean vegetables.",
    price: "$15.49",
  },
  {
    name: "Spanakopita",
    img: "spanakopita.png",
    desc: "A savory Greek pastry filled with spinach, feta cheese, herbs, and wrapped in flaky phyllo dough.",
    price: "$8.99",
  },
  {
    name: "Grilled Swordfish",
    img: "swordfish.png",
    desc: "Tender swordfish fillet grilled to perfection, topped with lemon-parsley sauce, and served with rice and fresh veggies.",
    price: "$15.49",
  },
];

const Menu = () => {
  return (
    <main>
      <section>
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-container">
          <div className="menu-grid">
            {menuItems.map((item) => (
              <article key={item.name} className="menu-card">
                <img
                  src={`/assets/${item.img}`}
                  alt={item.name}
                  loading="lazy"
                />
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <p className="price">{item.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;

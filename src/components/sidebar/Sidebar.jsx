import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  const list = [
    {
      id: 1,
      title:
        "The header should have these two buttons - Add Card and Sort Cards.",
    },
    {
      id: 2,
      title:
        "When the application is starting, the card container must be empty. The user should select Add Card in order to add the cards in the container.",
    },
    {
      id: 3,
      title:
        "All of the cards must have an X icon on the top of the right side. This icon’s function is to delete the card. ",
    },
    {
      id: 4,
      title: `In the component, where the cards are added, a scrollbar should appear when the quantity of cards is more than the height of the page. However, you don’t need to have the scrollbar at the beginning or when the amount of cards is smaller or equal to the height of the container. It's visible in the image only so users will see cards can be infinite.`,
    },
    {
      id: 5,
      title:
        "On the right side of the page, we should have a component. There should be written Instructions.",
    },
    {id: 6, title: "On the bottom, we should have a basic footer."},
  ];
  return (
    <aside>
      <h6 className="aside-title">
        The app should have a basic layout Header, Instructions, Main, and
        Footer:
      </h6>
      <ul className="aside-list">
        {list.map(item => (
          <li key={item.id} className="aside-list-item">
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

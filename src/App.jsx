import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Autorize the user Data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "create new payment for the user 💰",
  },
];
function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isShowModal, setShowModal] = useState(true);
  const [count, setCount] = useState(0);
  // const [activeTab, setActiveTab] = useState({ name: "fatemeh" });
  const handleActiveTab = (id) => {
    setActiveTab(id);
    setCount(count + 1);
    setCount((c) => c + 1); //زمانی که به مقدار قبلی خودش وابسته است باید از کالبک فانکشن استفاده کنیم
    // setActiveTab({ name: "mohammad", email: "user@test.com" }); // it's true
    // activeTab.name = "navid";
  };
  const showModal = () => setShowModal(!isShowModal);
  return (
    <div>
      <button className="tab__content" onClick={() => showModal()}>
        {isShowModal ? "closemodal" : "showmodal"}
      </button>
      {isShowModal ? (
        <div className="tabs">
          <div className="tab__header">
            {tabData.map((data) => {
              return (
                <button
                  onClick={() => handleActiveTab(data.id)}
                  key={data.id}
                  className={`btn btn--primary ${
                    activeTab === data.id ? "active" : ""
                  }`}
                >
                  <span className="title__header">{data.title}</span>
                  <span className="tab-indicator"></span>
                </button>
              );
            })}
          </div>
          <div className="tab__content">
            {tabData[activeTab - 1].content} - {count}
          </div>
        </div>
      ) : (
        <p className="tab__content">closemodal</p>
      )}
    </div>
  );
}
export default App;

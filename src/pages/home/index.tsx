const Home = () => {
  type MissionType = {
    title: string;
    content: string[];
  };
  const missionList: MissionType[] = [
    {
      title: "Week01 - 從函式拆解認識設計模式",
      content: [
        "1. 使用者可以查看產品列表",
        "2. 使用者可以點擊單一產品，查看詳細資訊",
      ],
    },
    {
      title: "Week02 - RESTful API 串接",
      content: [
        "1. 使用者可以從登入頁面登入，並轉到後台商品頁面",
        "2. 使用者若無登入直接進入商品頁面，會被導回登入頁面",
        "3. 使用者可以查看產品列表",
        "4. 使用者可以點擊單一產品，查看詳細資訊",
      ],
    },
    {
      title: "Week03 - 熟練 React.js",
      content: [
        "1. 可以新增、編輯、刪除商品",
        "2. 商品啟用、關閉可以使用不同的顏色標示",
      ],
    },
    {
      title: "Week04 - 元件化",
      content: [
        "1. 將後台頁面 Modal 以及分頁改成元件",
        "2. 使用 import module 來引入元件",
        "3. 使用者可以打開 Modal 新增、編輯、刪除商品",
      ],
    },
    {
      title: "Week05 - 進階語法介紹",
      content: [
        "1. 使用 React Hook Form 完成表單驗證功能",
        "2. 使用 react-loading 套件 製作 loading 效果",
        "3. 串接前台 API 完成購物車功能",
      ],
    },
  ];
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h2 className="mb-12">HexSchool 2024 React 主線任務</h2>
      {missionList.map((mission) => (
        <section className="w-3/4 mb-5" key={mission.title}>
          <h4 className="mb-3">{mission.title}</h4>
          <ul>
            {mission.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Home;

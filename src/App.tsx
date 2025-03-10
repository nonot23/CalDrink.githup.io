import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [weight, setWeight] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const changeTheme = () => {
    setTheme(!theme);
  };

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
    console.log(weight);
  };

  const totalDrink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const total = weight * 2.2 * (30 / 2);
    setTotal(Number(total.toFixed(2)));
  };

  return (
    <>
      <div
        className={
          theme
            ? "bg-black text-white min-h-screen "
            : "bg-white text-black min-h-screen"
        }
      >
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="space-y-8 text-center grid grid-cols-1">
            <h1 className={theme ? "text-white" : "text-black"}>
              ควรดื่มน้ำวันละเท่าไหร่ ?
            </h1>
            <h2
              className={
                theme ? "text-white text-[30px]" : "text-black text-[30px]"
              }
            >
              {total} มล.
            </h2>
            <form className="flex flex-col gap-4" onClick={totalDrink}>
              <input
                onChange={handleWeight}
                className={
                  theme
                    ? "border border-white-500 mx-auto w-[300px] bg-gray-800 text-white p-2"
                    : "border border-black-500 mx-auto w-[300px] bg-white text-black p-2"
                }
                type="text"
                id="weight"
                placeholder="น้ำหนักของคุณ (กิโลกรัม)"
              />
              <input
                className={
                  theme
                    ? "border-1 w-[100px] mx-auto h-[40px] bg-blue-600 cursor-pointer text-white"
                    : "border-1 w-[100px] mx-auto h-[40px] bg-blue-600 cursor-pointer text-white"
                }
                type="submit"
                value="คำนวณ"
              />
            </form>
          </div>
        </div>
        <button
          onClick={changeTheme}
          className={
            theme
              ? "fixed bottom-5 right-5 border-1 w-[100px] bg-white text-black text-[20px] hover:bg-black hover:text-white cursor-pointer transition duration-300"
              : "fixed bottom-5 right-5 border-1 w-[100px] bg-black text-white text-[20px] hover:bg-white hover:text-black cursor-pointer transition duration-300"
          }
        >
          {theme ? "Light" : "Dark"}
        </button>
      </div>
    </>
  );
}

export default App;

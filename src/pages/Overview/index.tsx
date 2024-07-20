/*
 * @Author: Antony-Juicy wangshengping1064@dingtalk.com
 * @Date: 2023-03-21 18:03:45
 * @LastEditors: Antony-Juicy wangshengping1064@dingtalk.com
 * @LastEditTime: 2024-07-20 23:24:00
 * @FilePath: /react18-umi4-antdPor5-template/src/pages/Overview/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable react/button-has-type */
import { useLocalStorage } from '@uidotdev/usehooks';
import * as React from 'react';

const Overview = () => {
  const data = 'admin';

  const [drawing, saveDrawing] = useLocalStorage('drawing', data);
  const ref = React.useRef(null);

  React.useEffect(() => {
    console.log(drawing, 'drawing===>>>');
  }, [drawing, saveDrawing]);

  const handelClick = () => {
    saveDrawing('Antd~');
  };

  return (
    <>
      <section>
        <header>
          <h1>useLocalStorage</h1>
          <button className="link" onClick={() => window.location.reload()}>
            Reload Window
          </button>
          <button
            className="link"
            onClick={() => {
              window.localStorage.clear();
              window.location.reload();
            }}
          >
            Clear Local Storage
          </button>
        </header>
        <br />
        <figure>
          <input ref={ref} value={drawing} />
          <button onClick={handelClick}>Clear Local Storage</button>
        </figure>
      </section>
    </>
  );
};
export default Overview;

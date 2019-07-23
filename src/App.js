import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {curl1} from "./curl1"
import curlirize from 'axios-curlirize';




var headers = {
    // 'Pragma': 'no-cache',
    'Origin': 'https://pass.rzd.ru',g
    // 'Accept-Encodinsg': 'gzip, deflate, br',
    // 'Accept-Language': 'en-US,en;q=0.9,ru;q=0.8,la;q=0.7,bg;q=0.6',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    // 'Accept': 'application/json, text/javascript, */*; q=0.01',
    // 'Cache-Control': 'no-cache',
    // 'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
    'Referer': 'https://pass.rzd.ru/tickets/public/ru?layer_name=e3-route&st0=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&code0=2000000&st1=%D0%9A%D0%B0%D0%BB%D1%83%D0%B3%D0%B0&code1=2000351&dt0=26.07.2019&tfl=3&md=0&checkSeats=0',
    'Cookie': 'lang=ru; ClientUid=qLgE7Ttrli7IGGdV30bTzzQT0S5wr9os; _ga=GA1.2.497963374.1563279052; _ym_uid=156327905245543088; _ym_d=1563279052; LtpaToken2=O3XR0hyj3ChuXxhKnOKOTptMzAmOy4+v9qeY0P3G4ssFCJCs3cT+JVctAXZW+MFg881xYAYgwKGBUS8hzj0C/JJs7FZEwSPB0MoRrVKOUfU6o6ZMMbt9NPrFnZcZsNPLl1wrydMI8YEm65DNuZcYNAAO2rwJVXI10MoIPffVDfbh/KlJyingzCfuHSGXGLdS9C23vhm+sYrMLLVy/R5wgIaDiKlkHG7R+Qgo7SysedKDcE17R7UdGEmfJW0ROF76UPH6C1UVd6z2GxSdpgIdqLXVfrUUiTRhYtgnrr9cV/4TgYIyaTlwCtyKuWjly8+VQoOBdP6BafDGVYXV5S6AYkfxZOiK2pZqPGBTPs1Uav+okRCbf9FR7M4GNd90/lKY8Lr95C4tCtaghflcCtwBkM+YR3nT4Pi+lBbmACFI3aHGWuhepg4Yq/Ih6u9jpGk2KGL/M1NdqPTR+ZIT9xtv/ogalsRRQUMuoW7Xr1ggZtydHTEMHu+b9J2erhsCqDVmdbbPhYcRRDf97VaKhtomjVsKTF0q54g69HwSf7DxokHPCj4Mi2AcIBxhf+A5tMAOarFMDEgnV5yqpQgNKG9CKJbYfFTJT4LfqQACyNkYyG/xR/kZGHJauudIyrlpr3hZ; AuthFlag=false; _gid=GA1.2.788282253.1563797091; _ym_isad=2; _ym_visorc_25857680=w; JSESSIONID=0000YbV3hT-ecAhET7z0CH17a3F:17obqanl3; _gat=1; tmr_detect=0%7C1563887929914; accessible=false'
};

var dataString = 'dir=0&tfl=3&code0=2000000&code1=2000351&dt0=26.07.2019&checkSeats=0&withoutSeats=y&version=v.2018';

var options = {
    url: 'https://pass.rzd.ru/timetable/public/ru?layer_id=5827',
    method: 'POST',
    headers: headers,
    body: dataString
};







function App() {

  useEffect(() => {
      axios(options)
         .then(resp=>{
             console.log (
                 ' resp',  resp,
             );
         })
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;

import React from "react";
import Language from "./Language";

const Hero=()=>{
  return(
  <div>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
      　API
      </h1>
      <h2 class="subtitle">
        お試し
      </h2>
    </div>
  </div>
</section>
</div>
  );
};
const App = () => {
  return (
<div>
<Hero />
<Language />
<body>
  <section className="section">
    <div className="container">
      <h1 className="title">セクション</h1>
      <h2 className="subtitle">
         お試しで<strong>太字とかもやってみちゃう</strong>
      </h2>
    </div>
  </section>
</body>

<div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <a className="title" href="https://mainichi.jp/articles/20200606/k00/00m/030/070000c">トランプ氏、死亡した黒人男性にとって「素晴らしい日」と発言</a>
          <p className="subtitle">全米で続く警察の暴力と人種差別への抗議の声とは正反対の状況認識に、非難が噴出している。</p>
        </article>
        <article className="tile is-child notification is-warning">
          <a className="title" href="https://mainichi.jp/articles/20200604/k00/00m/040/156000c">猛毒「フッ化水素酸」こぼれ異臭</a>
          <p className="subtitle">けが人はなし</p>
        </article>
      </div>
      
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <a className="title" href="https://mainichi.jp/articles/20200608/k00/00m/010/146000c">安倍首相「Go To」を「強盗」と言い間違い</a>
        <p className="subtitle">野党の質問に引っ張られ</p>
        <div className="content">
        巨額の委託費の計上が問題視されている「Go Toキャンペーン事業」の「Go To」を「強盗」と言い間違える場面があった。
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <a className="title"  href="https://news.yahoo.co.jp/articles/9ca6bc41222f5f2f2684e3a7dae5b23cc029bd67">渡部が不倫</a>
        <p className="subtitle">アンジャッシュ・渡部健の不倫報道が世間を激震させている。

　ことの発端は6月9日に『スポニチアネックス』が報じた《アンジャッシュ・渡部建　TV各局に番組出演の全面自粛申し入れ》の記事。レギュラー番組を8本を抱える超人気芸人が突如、出演を取りやめることを決断したという。
</p>
        <div className="content">
          
        </div>
      </div>
    </article>
  </div>
</div>

</div>
  );
};

export default App;
(() => {
  const $link = document.getElementsByClassName('shop-a');
  const $mask = document.getElementById('mask');
  const $modal = document.getElementById('modal');
  const $img = document.getElementById('push-img');
  const $class = document.getElementById('js-class');
  const $location = document.getElementById('js-location');
  const $text = document.getElementById('js-text');


  const shopExplation = [
    {
      classname: '1年生',
      location:  '1年生教室',
      text: 'あるところに炎と呼ばれる者の屋敷があった。そこの家主は界といいとても温和な男だった。その性格からかその屋敷に勤める多くの臣下たちから慕われていた。そこは、幸せに満ちていた。あの日までは・・・あの日の記憶を追体験しませんか？',
      url:"image/store/first_grade.webp"
    }, {
      classname: 'CA2',
      location: '第一体育館前道路',
      text: 'CA2はポップコーンを販売します！作り立てのポップコーンが食べられます！ぜひ食べに来てください！！お待ちしています！！！ ',
      url:"image/store/CA2.webp"
    }, {
      classname: 'IE2',
      location: 'IE4教室',
      text: 'こんにちは!IE2ではカジノを開催します。どなたでも気軽に参加できるのでぜひ遊びに来てください！さぁ皆さん、一緒に賭け狂いましょう。 ',
      url:"image/store/IE2.webp"
    }, {
      classname: 'ME2',
      location: '実習工場横駐車場',
      text: 'こんにちは!ME2ではフライドポテトを販売します。味付けは塩味だけでなくコンソメ味も用意しています！お腹が空いた時にも、ちょこっとしたスキマ時間にも、ぜひ気軽に食べに来てください！ ',
      url:"image/store/ME2.webp"
    },{
      classname: 'CA3',
      location: 'CA3教室',
      text: 'こんにちは！CA3です。私たちは「メイド喫茶」として、ミニパンケーキとあまおうジンジャーを提供します！女の子も男の子もメイド服を着て、ご主人様・お嬢様のお帰りをお待ちしております♡ ',
      url:"image/store/CA3.webp"
    },
    
    {
      classname: 'IE3',
      location: '実習工場横駐車場',
      text: 'IE3はフライドポテトを販売します。味は塩味です！とっても美味しいので、ぜひ買いに来てください。よろしくお願いします！ ',
      url:"image/store/IE3_solt.webp"
    }, {
      classname: 'ME3',
      location: '第一体育館',
      text: '紹介文です。こんにちは！私たちはフライドポテトを販売します。美味しく作ります！皆さんぜひ買いに来てください。よろしくお願いします！ ',
      url:"image/store/ME3.webp"
    }, {
      classname: 'CA4',
      location: '第一体育館前道路',
      text: 'CA4は韓国のソウルフードとしてお馴染みのトッポギとウインナーを竹串に交互に刺してある屋台のグルメのソトクソトクと爽やかな風味の感じるレモネードを販売します!どっちもちょー美味しいのでぜひ買いにきてください＾＾ ',
      url:"image/store/CA4.webp"
    }, {
      classname: 'IE4',
      location: '第1パソコン室',
      text: 'IE4です！情報処理センターでアプリ展示とプログラミング講座をやっています。プログラミング初心者の方も上級者の方もそれぞれにあったレベルを選択することが出来ます。ぜひ来てください！ ',
      url:"image/store/IE4.webp"
    }, {
      classname: 'IE5',
      location: '第一体育館前道路',
      text: 'IE5です。焼きたてのたい焼きを販売します！ぜひ買いに来てください！ ',
      url:"image/store/IE5.webp"
    }, {
      classname: 'IE企画',
      location: 'ICT教室',
      text: '情報電子工学科がお送りする至高の謎解き体験。高専祭の企画各所を回りつつ参加可能！ 「謎解き工学科への入学試験」君は全ての謎を解き明かし、合格できるか。  〜〜参加無料。ICT 教室で謎解きキット配付中 ',
      url:"image/store/IE_event.webp"
    }, {
      classname: 'ME企画',
      location: '実習工場',
      text: 'MEの学科企画は、ME学科紹介として授業で製作したロボットや実習工場の製作物などの展示を行います。学生製作の色々なロボットや実習工場の高精度な製作物を見ることができます。是非見学にお越しください！ ',
      url:"image/store/ME_event.webp"
    }, {
      classname: 'サッカー部',
      location: '実習工場横駐車場',
      text: 'こんにちは、サッカー部です。フランクフルトをしています。おいしいので食べに来てください。 ',
      url:"image/club/soccer.webp"
    }, {
      classname: 'テラス計画',
      location: '高城寮食堂周辺・合宿所（寮の近く）・ハンドコート前広場（寮の近く）',
      text: 'テラス計画です！寮食堂のテラス席をつくってるグループです！ 今年は「テラスフェス」を開催します！ヤキイモ・部活動写真展・射的・輪投げなど色々やっています！ また、テラス席を飲食の場として開放しているので、ぜひテラスで高専祭メシを食べてみませんか？？ ',
      url:"image/club/terrace.webp"
    }, {
      classname: 'ニューメディア部',
      location: '教室管理棟１階 パソコン室',
      text: 'ゲーム、アプリケーション、CGなどコンピュータを使ったさまざまな作品を展示しています。普段はゲーム禁止のパソコン室も、今だけは遊び放題！！ 楽しみ方はあなた次第です！ ぜひ訪れてみてください。 ',
      url:"image/club/new_media.webp"
    }, {
      classname: 'バドミントン部',
      location: '第１体育館前道路',
      text: 'バド部です！第1体育館前でクレープやってます。味も何種類かあります。売上1位目指すので、ぜひ来てください。めっちゃ美味しいです！ ',
      url:"image/club/badminton.webp"
    }, {
      classname: '園芸同好会',
      location: '学生談話室',
      text: '今年は過去の花壇の写真展示をします。高専祭の時期では見ることができない花壇の写真も展示しています。ぜひお越しください。 ',
      url:"image/club/garden.webp"
    }, {
      classname: '写真部',
      location: '学生談話室',
      text: '写真部では作品展示会を行います。いろいろな視点で撮影した個性あふれる写真をお楽しみください。投票も行いますので、ぜひご参加ください。 ',
      url:"image/club/picture.webp"
    }, {
      classname: '吹奏楽部',
      location: '実習工場横駐車場',
      text: 'こんにちは！！吹奏楽部は、牛肉コロッケとかぼちゃコロッケの出店をします！！寒い時期にピッタリの熱々コロッケ！！ぜひ食べに来てください！！ ',
      url:"image/club/brass_band_1.webp"
    }, {
      classname: '卓球部',
      location: '実習工場横駐車場',
      text: 'こんにちは！卓球部です！私たちは揚げたこを作っています！外はカリカリ、中はトロトロで子供から大人まで喜ぶこと間違いなしです！ぜひご賞味あれ！ ',
      url:"image/club/ping_pong.webp"
    }, {
      classname: '男子バスケ部',
      location: '実習工場横駐車場',
      text: '男子バスケットボール部です。僕たちはナゲットを売ります。アツアツでジューシーでむちむちでピチピチなナゲットです！ぜひ買ってください！スマイルも購入可能です。 ',
      url:"image/club/bascket.webp"
    }, {
      classname: '伝統文化同好会',
      location: '学生談話室',
      text: '私たち伝統文化同好会は、談話室に生け花作品を展示しています。部員一人ひとりが生けた、柵にとらわれない自由な作品となっております。今日まで受け継がれてきた日本文化の1つである｢生け花｣をぜひご覧ください。 ',
      url:"image/club/culture.webp"
    }, {
      classname: '美術部',
      location: '学生談話室',
      text: '美術部では今年も部員の絵を展示いたします。デジタルや油絵、大きいものから小さいものまで様々な絵を用意いていますので、是非ご覧ください。 ',
      url:"image/club/art.webp"
    },{
      classname: '文芸部',
      location: '学生談話室',
      text: 'どうも！文芸部です。文芸部では文芸誌の配布を行います。 無料配布になるのでご自由にお持ちください。かなり自由に書かれた物語が入っています。 難し気なものではないので気楽にお読みください！ ',
      url:"image/club/literature.webp"
    },{
      classname: '茶道部',
      location: '小会議室1',
      text: 'こんにちは！茶道部です。私達はお茶会をしています。 作法を知らなくても気軽に参加していただけます。 無料で美味しい和菓子とお抹茶を用意していますので、ぜひお越しください♪ ',
      url:"image/club/tea.webp"
    },{
      classname: 'メカトロシステム部',
      location: '談話室前',
      text: 'こんにちは！メカトロシステム部はクレーンゲーム、射的、風船割りの出店をします。クレーンゲームはメカトロシステム部が 1 から製作したものです。興味のある方はぜひ来てください！ ',
      url:"image/club/meca.webp"
    }
  ];

  $mask.addEventListener('click', () => {
    $mask.classList.add('hidden');
    $modal.classList.add('hidden');
  });

  //クリックされた時の挙動
  for (let i = 0; i < $link.length; i++) {
    $link[i].addEventListener('click', function (e) {
      e.preventDefault();
      $mask.classList.remove('hidden');
      $modal.classList.remove('hidden');
      $img.src=shopExplation[i].url;
      $class.textContent = shopExplation[i].classname;
      $location.textContent = shopExplation[i].location;
      $text.textContent = shopExplation[i].text;
    });
  }
})();
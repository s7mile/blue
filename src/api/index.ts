import color from "../utils/color";

export const allMenus = [
  {
    title: "웹툰",
    color: color.blue[1],
    subCategory: [
      {
        title: "연재",
        link: "/webtoon",
      },
      {
        title: "오리지널",
        link: "/webtoon/original",
      },
      {
        title: "단편",
        link: "/webtoon/shortstory",
      },
      {
        title: "장르",
        link: "/webtoon/genre/all",
      },
      {
        title: "완결",
        link: "/webtoon/completed",
      },
      {
        title: "베스트 100",
        link: "/webtoon/best/weekly",
      },
    ],
  },
  {
    title: "만화",
    color: color.green,
    subCategory: [
      {
        title: "추천",
        link: "/comic",
      },
      {
        title: "장르",
        link: "/comic/genre/all",
      },
      {
        title: "무협관",
        link: "/comic/heroism",
      },
      {
        title: "특별관",
        link: "/comic/special",
      },
      {
        title: "무료",
        link: "/comic/free/all",
      },
      {
        title: "베스트 100",
        link: "/comic/best/all/daily",
      },
    ],
  },
  {
    title: "소설",
    color: color.orange,
    subCategory: [
      {
        title: "추천",
        link: "/novel",
      },
      {
        title: "연재",
        link: "/novel/series",
      },
      {
        title: "로맨스",
        link: "/novel/romance",
      },
      {
        title: "판타지/무협",
        link: "/novel/fanmu",
      },
      {
        title: "BL",
        link: "/novel/bl",
      },
      {
        title: "일반",
        link: "/novel/genre/others/all",
      },
      {
        title: "무료",
        link: "/novel/free/all",
      },
      {
        title: "베스트 100",
        link: "/novel/best/all/weekly",
      },
    ],
  },
];

export const mainMenus = [
  {
    title: "웹툰",
    link: "/webtoon",
    color: color.black,
    hover: color.blue[0],
  },
  {
    title: "만화",
    link: "/comic",
    color: color.black,
    hover: color.green,
  },
  {
    title: "소설",
    link: "/novel",
    color: color.black,
    hover: color.orange,
  },
  {
    title: "기다리면 무료",
    link: "/gift/wait",
    color: color.gray[0],
    hover: "",
  },
  {
    title: "이벤트",
    link: "/event",
    color: color.gray[0],
    hover: "",
  },
];

export const subMenus = [
  {
    title: "블루머니 충전",
    link: "/bluemoney/recharge",
    color: color.gray[1],
    hover: "",
  },
  {
    title: "알림함",
    link: "/alarm",
    color: color.gray[1],
    hover: "",
  },
  {
    title: "선물함",
    link: "/gift",
    color: color.gray[1],
    hover: "",
  },
  {
    title: "로그인",
    link: "/login",
    color: color.gray[1],
    hover: "",
  },
  {
    title: "회원가입",
    link: "/join",
    color: color.blue[0],
    hover: color.blue[0],
  },
];

export const middleCategory = [
  {
    title: "성인만화",
    link: "/comic/genre/adult",
    icon: 19,
  },
  {
    title: "BL만화",
    link: "/comic/genre/bl",
  },
  {
    title: "무협만화",
    link: "/comic/heroism",
  },
  {
    title: "할리퀸만화",
    link: "/comic/genre/harlequin",
  },
  {
    title: "인기웹툰",
    link: "/webtoon/best/daily",
  },
  {
    title: "연재소설",
    link: "/novel/series",
  },
  {
    title: "로맨스소설",
    link: "/novel/romance",
  },
];

export const categoryList: { [key: string]: any } = {
  fantasy: {
    title: "판타지",
    link: "/novel/genre/series/fantasy",
  },
  romance: {
    title: "로맨스",
    link: "/webtoon/genre/romance",
  },
  // 더 있으면 추가.
};

export const authorList: { [key: number]: string } = {
  1946: "김용환",
  13472: "Yuri",
  // 더 있으면 추가.
};

export const waitFreeWebtoonList = [
  {
    title: "내 남자는 공유할 수 없어",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000058490/cover_w200.jpg",
    authors: [1946],
    category: "romance",
    free: 4,
    sale: 0,
  },
  {
    title: "내 남자는 공유할 수 없어",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000058490/cover_w200.jpg",
    authors: [1946, 13472],
    category: "romance",
    free: 4,
    sale: 0,
  },
  {
    title: "내 남자는 공유할 수 없어",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000058490/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 0,
  },
  {
    title: "내 남자는 공유할 수 없어",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000058490/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 40,
  },
  {
    title: "내 남자는 공유할 수 없어",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000058490/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 40,
  },
  {
    title: "내 남자는 공유할 수 없어",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000058490/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 40,
  },
];

export const waitFreeComicList = [
  {
    title: "잡배",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000056511/cover_w200.jpg",
    authors: [1946],
    category: "romance",
    free: 4,
    sale: 0,
  },
  {
    title: "잡배",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000056511/cover_w200.jpg",
    authors: [1946, 13472],
    category: "romance",
    free: 4,
    sale: 0,
  },
  {
    title: "잡배",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000056511/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 0,
  },
  {
    title: "잡배",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000056511/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 40,
  },
  {
    title: "잡배",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000056511/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 40,
  },
  {
    title: "잡배",
    link: "/webtoon/wt_000058490",
    imgUrl:
      "https://img.mrblue.com/prod_img/comics/wt_000056511/cover_w200.jpg",
    authors: [13472],
    category: "romance",
    free: 4,
    sale: 40,
  },
];

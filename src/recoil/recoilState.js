import { atom } from "recoil";


export const commentState = atom({
  key: "commentState",
  default: [{user: "@매콤주먹입니다", upload_time: "1분 전", content: "뉴진스 짱이요!"}]
})

export const isMenuOpenState = atom({
  key: "isMenuOpenState",
  default: false
})
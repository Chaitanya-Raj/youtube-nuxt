<template>
  <div
    class="min-h-[calc(100vh-110px)] bg-[#181818] pt-5 pb-20 px-20 overflow-y-scroll"
  >
    <div class="grid grid-cols-12 gap-x-4 gap-y-10">
      <home-item v-for="video in videos" :key="video.name" :video="video" />
    </div>
  </div>
</template>

<script>
import HomeItem from "./HomeItem.vue";
export default {
  components: { HomeItem },
  data() {
    return {
      videos: [
        {
          thumbnail:
            "https://i.ytimg.com/vi/8Gty8-w2joo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-gksUjeXYTKNkLa3Own2jU86A3w",
          title: "Dil-E-Nadaan",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu-OlsdSUHgAUOTV6bYLAUmL3AQbsFzglQ4J2WrdPw=s68-c-k-c0x00ffffff-no-rj",
          channel: "Kavita Seth",
          duration: "6:22",
          views: "23 lakh views",
          time: "2 year ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/ESbioodSaHQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpdS8B7DqNd9QnqlU07_FHI7jAew",
          title: "一花一世界 (One flower is a world) | 巫娜 | 古琴",
          avatar:
            "https://yt3.ggpht.com/qzZgj0nZR9J4wYsu-d6EJ4UzoRquUAMEfkrEintZKAER5fSU_kcoslpg17OOckxVfwX9Obo8=s68-c-k-c0x00ffffff-no-rj",
          channel: "Lotus",
          duration: "57:04",
          views: "11 lakh views",
          time: "1 year ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/961LpbX4zCU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBryyxozY-olSra93v2enscn-_mOg",
          title: "Peter Cat Recording Co. - Floated By",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu97D06Ji45UQbR7smkFybVGEZkBii00W9ar6ilGQw=s88-c-k-c0x00ffffff-no-rj",
          channel: "Peter Cat Recording Co.",
          duration: "4:36",
          views: "6.6 lakh views",
          time: "3 year ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/hqtzpED1y-I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZ_BErOeHpLM23bjIlZj0CZz0exA",
          title: "How to Stop Wasting Your Life - Carl Jung as Therapist",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu-OlsdSUHgAUOTV6bYLAUmL3AQbsFzglQ4J2WrdPw=s68-c-k-c0x00ffffff-no-rj",
          channel: "Academy of Ideas",
          duration: "1:15",
          views: "2.7 lakh views",
          time: "1 month ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/px_sz1GPHXw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANNAe4QasiEh-9wCru1wQDEHAh9Q",
          title: "LIFAFA लिफाफा - Nikamma निकम्मा",
          avatar:
            "https://yt3.ggpht.com/XQWHGAaKhucjZ0CHKzwSx81_DStGKIlwxjcKfa_S799Vst1rfneLXhlfGhG0-3T69dJHbNuzNQA=s48-c-k-c0x00ffffff-no-nd-rj",
          channel: "LIFAFA",
          duration: "3:31",
          views: "19 lakh views",
          time: "3 year ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/IDDmrzzB14M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP0RE7yHrX19Qjci_E2CFpVMfmhg",
          title: "CS50 2022 - Lecture 0 - Scratch",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu_8E2fVaNH2D20xn32ph9axohUCgWaLpXO_tXJ14g=s48-c-k-c0x00ffffff-no-rj",
          channel: "CS50",
          duration: "2:45:40",
          views: "1 lakh views",
          time: "1 month ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/H_IQfxM4oMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApCZMqBpUSHa2uo_kguMswUvFl1g",
          title:
            "The Struggles When ADHD Goes Unacknowledged and Under-Discussed",
          avatar:
            "https://yt3.ggpht.com/m1WI2xsDLyJUGUnt2ZRSxqsT89gSnRaUQunO5p5WmpU1113oO31EXNl_8w1cuZXmIA0EHOTyJw=s48-c-k-c0x00ffffff-no-rj",
          channel: "How to ADHD",
          duration: "14:19",
          views: "1.1 lakh views",
          time: "8 day ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/XPKpOBGsoOs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW5gEv5H38UiHn0VSagezfxi12kQ",
          title:
            "[Playlist] A Collection of Jazz from Haruki Murakami's 'Norwegian Wood'",
          avatar:
            "https://yt3.ggpht.com/e8P1A4RdQYbCQdoDBPamz_G_Yl5bSEtdvQquhvWEKy5sYmR1BpIcDinyGxYqB1fQRdO0CB_Q=s48-c-k-c0x00ffffff-no-rj",
          channel: "JAZZ IS EVERYWHERE",
          duration: "58:23",
          views: "9 lakh views",
          time: "7 month ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/KfuKKeshzSw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN1EkwrB3fi7-5J-EEdYXXuFmk2A",
          title: "intesaab (faiz ahmed faiz)- ammar rashid",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",
          channel: "Time ho to sun lena",
          duration: "4:19",
          views: "22k views",
          time: "2 year ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/T3ztasKf8rY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE8v34fhy-X_am7Kzgi7PUtND4Uw",
          title: "awaraa - zeb bangash and michael winograd (reupload)",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",
          channel: "Time ho to sun lena",
          duration: "1:54",
          views: "12k views",
          time: "3 year ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/rpCRyjUl5iM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMgBROftUecBosQukFCZg3MBru-A",
          title: "Kya Farak Padega",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",
          channel: "Time ho to sun lena",
          duration: "4:45",
          views: "6.7k views",
          time: "2 year ago",
        },
        {
          thumbnail:
            "https://i.ytimg.com/vi/vicEyHkNpAs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6APyofjAdFaIqdY2ptW3KshGrTQ",
          title: "Kya Baat Jo Benaqab Ho - Saby Singh",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8PE4HnYH_J7tPx2E-YvPOl_ESmjZC8BXeAL9amqfJxv_ZunFCtKnYgOuKxZJsZ=s176-c-k-c0x00ffffff-no-rj-mo",
          channel: "Time ho to sun lena",
          duration: "5:28",
          views: "3k views",
          time: "3 year ago",
        },
      ],
    };
  },
};
</script>

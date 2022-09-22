<template>
  <!-- TODO: Make the scrollbar only show on hover -->
  <aside
    class="w-72 h-[calc(100vh-56px)] bg-[#202020] py-3 overflow-y-auto hidden md:block"
    aria-label="Sidebar"
  >
    <div>
      <tab
        v-for="option in options1"
        :key="option.name"
        :name="option.name"
        :icon="option.icon"
      />
    </div>
    <div class="pt-4 mt-4 border-t border-[#363636]">
      <div>
        <tab
          v-for="option in options2"
          :key="option.name"
          :name="option.name"
          :icon="option.icon"
        />
      </div>
    </div>

    <div class="mt-4 border-t border-[#363636]">
      <div
        class="flex items-center pl-6 pt-3 pb-2 text-sm font-medium text-[#8a8a8a] group"
      >
        SUBSCRIPTIONS
      </div>
      <div v-for="channel in subscriptions" :key="channel.name">
        <subscription :channel="channel" />
      </div>
    </div>
  </aside>
</template>

<script>
import Subscription from "./Subscription.vue";
import Tab from "./Tab.vue";
export default {
  components: { Subscription, Tab },
  data() {
    return {
      subscriptions: [
        {
          name: "Endel",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Dreamy",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Your Food Lab",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "The Exploring Series",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Endel",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Dreamy",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Your Food Lab",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "The Exploring Series",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Endel",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Dreamy",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Your Food Lab",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "The Exploring Series",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Endel",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Dreamy",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Your Food Lab",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "The Exploring Series",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Endel",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Dreamy",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Your Food Lab",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "The Exploring Series",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Endel",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8zxjKW-fwugdR-fl7Osg_ZA7XS37j9DWx7bsOK=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Dreamy",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu8AdR1skGj4cVnjVzg5ihmxim0aLNpF2MGO3jHo=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Your Food Lab",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu9C_4VJki-D53MM8QLRPWzr48bSSpP3tN5y2GkgLw=s88-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "The Exploring Series",
          avatar:
            "https://yt3.ggpht.com/ytc/AMLnZu_ELD3tSAb5Bsz2ztU0rY31lzjRe9umVrnUsBGK=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
      options1: [
        {
          name: "Home",
          icon: "home-icon",
        },
        { name: "Explore", icon: "explore-icon" },
        { name: "Shorts", icon: "shorts-icon" },
        { name: "Subscriptions", icon: "subscription-icon" },
      ],
      options2: [
        {
          name: "Library",
          icon: "library-icon",
        },
        { name: "History", icon: "history-icon" },
        { name: "Your Videos", icon: "videos-icon" },
        { name: "Watch Later", icon: "watch-later-icon" },
        { name: "Your Clips", icon: "clips-icon" },
        { name: "See More", icon: "arrow-icon" },
      ],
    };
  },
};
</script>

<style>
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #707070 #202020;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #202020;
}

*::-webkit-scrollbar-thumb {
  background-color: #707070;
  border-radius: 20px;
  border: 3px solid #202020;
}
</style>

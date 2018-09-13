import GridList from '@/components/GridList';
import List from '@/components/List';

// @vue/component
export default {
  name: 'QuickLinks',
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cmp() {
      if (this.settings.grid) {
        return GridList;
      }
      return List;
    },
    size() {
      return [32, 64, 96, 128][this.settings.size];
    },
    links() {
      return this.settings.links
        .map((f) => {
          const Url = new URL(f);
          const icon = this.settings.grid ? this.$utils.getFavicon(Url.hostname, this.size)
            : this.$utils.getFavicon(f);
          return { name: Url.hostname, url: f, icon };
        });
    },
  },
  created() {
    this.$emit('init');
  },
};
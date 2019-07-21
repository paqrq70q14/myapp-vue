





export const playlistMixin = {

    methods: {
        getFavoriteIcon() {

            if (this.isFavorite(song)) {
                return 'icon-favorite'
            }
            return 'icon-not-favorite'
        },
        //点击切换收藏
        toggleFavoriteIcon(item) {
            if (isFavorite(item)) {
                this.deleteFavorite(item)
            } else {
                this.saveFavoriteList(item)
            }
        },
        //判断是否已在收藏列表
        isFavorite(item) {

            const index = this.favoriteList.findIndex((item) => {
                return item.id === song.id
            })
            return index > -1
        }
    }

}

export const optionslistMixin = {
    methods: {
        toggleActive() {
          if(this.hasActive()){
              return 
          }
          return 
        },
        hasActive() {

        }
    }
}






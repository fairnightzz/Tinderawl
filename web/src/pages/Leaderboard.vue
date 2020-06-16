<template>
    <div style="display: flex; align-items: center; justify-content: center;">
        <div class="tier-list">
        <div class="tier" v-for="(tier,i) in tierList" :key="i">
            <div class="tier-label" :style="{ 'background-color': tier.color }">
                <p>{{ tier.title }}</P>
            </div>

            <div class="tier-body">
                <img class="tier-img" v-for="(pic, j) in tierList[i].pics" :key="j" 
                    v-tippy="{placement: 'bottom', arrow: 'true'}"
                    :content="`Votes: ${pic.vote}`"
                    :src="pic.pic"
                />
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import UserService from '../services/user.service'
export default {
    name: 'Leaderboard',
    
    data: function() {

        return {
            tierList: [
                {
                    title: 'S',
                    color: '#f26f7d',
                    pics: [],
                },
                {
                    title: 'A',
                    color: '#f8bb85',
                    pics: [],
                },
                {
                    title: 'B',
                    color: '#feff7f',
                    pics: [],
                },
                {
                    title: 'C',
                    color: '#7efa76',
                    pics: [],
                },
                {
                    title: 'D',
                    color: '#7fbfff',
                    pics: [],
                },
            ]
        }
    },

    created: function() {

        UserService.getLeaderboard()
        .then(
            data => {
                const thresh = [17,14,12,10,0]
                for (const pic of data.pics) {
                    for (var t = 0; t < thresh.length; t++) {
                        if (pic.vote > thresh[t]) {
                            this.tierList[t].pics.push(pic)
                            break;
                        }
                    }

                }
                console.log(this.tierList)
            },
            error => {
                console.log(error);
            }
        );
    }
}
</script>

<style scoped>

    .tier-list {
        display: flex;
        width: 75%;
        flex-direction: column;
        top: 5rem;
        position: absolute;
        box-shadow: black 0 2px 10px;
    }
    
    .tier {
        display: flex;
        flex-direction: row;
    }
    .tier-label {
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tier-body {
        display: flex;
        background-color: #1a1a1a;
        width: 100%;
        flex-wrap: wrap; 
    }

    .tier-img {
        transition: all .3s; 
        width: 5rem;
        height: 5rem;
        overflow: hidden;
    }

    .tier-img:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 5px black;
    }

</style>
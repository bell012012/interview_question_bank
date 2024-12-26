<template>
    <div class="wrapper">
        <!-- 搜索框 -->
        <div class="searchBox">
            <input type="text" v-model="state.search" placeholder="搜索" />
            <button class="clearBtn" v-if="state.search" @click="clearInput">×</button>
        </div>

        <!-- 内容区域 -->
        <div class="contentBox">
            <div class="leftBox">
                <!-- title 区域 -->
                <div class="title" v-for="(item, index) in state.dataList" :key="item.title">
                    <p @click="toggleTitle(index)">{{ item.title }}</p>
                    <!-- text 区域 (折叠展开) -->
                    <div v-if="item.isTitleOpen" class="textBox">
                        <div class="textItem" v-for="(textItem, textIndex) in item.text" :key="textItem.name"
                            @click.stop="toggleContent(index, textIndex)">
                            <p>{{ textItem.name }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- rightBox 区域 -->
            <div class="rightBox">
                <p v-if="state.selectedContent">{{ state.selectedContent }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { OriginalDataList } from './index'

// 定义 TextItem 类型接口
interface TextItem {
    name: string;
    content: string;
    isContentOpen: boolean;
}

// 定义数据项类型接口
interface DataItem {
    title: string;
    isTitleOpen: boolean;
    text: TextItem[];
}

const state = reactive({
    search: "",
    timeout: null as number | null,
    selectedContent: "",
    originalDataList: OriginalDataList,
    dataList: [] as DataItem[],
});
state.dataList = JSON.parse(JSON.stringify(state.originalDataList));
watch(
    () => state.search,
    (newVal) => {
        if (state.timeout !== null) {
            clearTimeout(state.timeout);
        }
        state.timeout = setTimeout(() => {
            handleSearch(newVal);
        }, 1000);
    }
);

const toggleTitle = (index: number) => {
    console.log('22');
    
    state.dataList.forEach((item, idx) => {
        if (idx !== index) {
            item.isTitleOpen = false;
        }
    });
    state.dataList[index].isTitleOpen = !state.dataList[index].isTitleOpen;
};

const toggleContent = (index: number, textIndex: number) => {
    console.log('111');
    
    const item = state.dataList[index];
    item.text.forEach((textItem: TextItem, idx: number) => {
        if (idx !== textIndex) {
            textItem.isContentOpen = false;
        }
    });
    item.text[textIndex].isContentOpen = !item.text[textIndex].isContentOpen;
    state.selectedContent = item.text[textIndex].isContentOpen ? item.text[textIndex].content : "";
};

const handleSearch = (value: string) => {
    state.selectedContent = "";
    if (!value.trim()) {
        state.dataList = JSON.parse(JSON.stringify(state.originalDataList));
        return;
    }
    let firstMatchedContent = "";
    state.dataList.forEach(item => {
        const titleMatch = item.title.toLowerCase().includes(value.toLowerCase());
        item.text = item.text.filter((textItem: TextItem) =>
            textItem.name.toLowerCase().includes(value.toLowerCase())
        );
        if (item.text.length > 0 || titleMatch) {
            item.isTitleOpen = true;
            if (!firstMatchedContent && item.text.length > 0) {
                firstMatchedContent = item.text[0].content;
                item.text[0].isContentOpen = true;
            }
        } else {
            item.isTitleOpen = false;
        }
    });
    state.selectedContent = firstMatchedContent;
};

const clearInput = () => {
    state.search = "";
};
</script>


<style lang="scss" scoped>
/* 控制滚动条的宽度 */
::-webkit-scrollbar {
    width: 6px; /* 水平滚动条宽度 */
    height: 6px; /* 垂直滚动条宽度 */
}

/* 控制滚动条轨道的颜色 */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* 滚动条轨道的背景色 */
    border-radius: 6px;
}

/* 控制滚动条滑块的颜色 */
::-webkit-scrollbar-thumb {
    background: #888; /* 滚动条滑块的颜色 */
    border-radius: 6px;
}

/* 滚动条滑块的悬停颜色 */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* 滚动条滑块悬停时的颜色 */
}


.wrapper {
    padding: 20px;
    width: 100%;
    height: 100vh;

    .searchBox {
        position: relative;
        height: 60px;
        background-color: #252f4b;
        border-radius: 10px 10px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;

        >input {
            width: 100%;
            height: 100%;
            height: 40px;
            outline: none;
            border-radius: 10px;
            text-indent: 1em;
        }

        .clearBtn {
            position: absolute;
            right: 10px;
            background: none;
            border: none;
            font-size: 30px;
            color: #999;
            cursor: pointer;
        }

        .clearBtn:hover {
            color: #333;
        }
    }

    .contentBox {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: calc(100% - 60px);
        overflow: hidden;

        .leftBox {
            flex: 3;
            padding: 0 10px 10px 10px;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            height: 100%;
            overflow-y: auto;
            border-radius: 0 0 0px 10px;
            background-color: #252f4b;
        }

        .rightBox {
            flex: 7;
            padding: 0 10px 10px 10px;
            height: 100%;
            overflow-y: auto;
            background-color: #314551;
            border-radius: 0 0 10px 0px;
            font-size: 20px;
        }

        .title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
        }

        .textBox {
            margin-top: 10px;
            margin-left: 10px;
        }

        .textItem {
            margin-bottom: 5px;
            cursor: pointer;
            >p {
                border: 1px solid #fff;
                border-radius: 20px;
                padding: 5px 10px;
            }
        }
    }
}
</style>

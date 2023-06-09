import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useTestStore = defineStore('test', () => {
    const a = ref<number>(0);

    const b = computed<number>({
        get(){return a.value * 2},
        set(value){a.value = value / 2}
    });

    return {a,b};
});

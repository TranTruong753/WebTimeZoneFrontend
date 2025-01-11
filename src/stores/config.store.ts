import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


type ConfigType = {
    [key: string]: any; // Hoặc chỉ định cụ thể, ví dụ: { theme: string; language: string }
};

export const useConfigStore = defineStore('config', {
    state: () => ({
        config: {} as ConfigType
    }),
    actions: {
    
        addKeyConfig(key:string, value:any) {
            if (this.config.hasOwnProperty(key)) {
                console.warn(`Key "${key}" đã tồn tại!`);
                return; // Dừng thêm key mới
            }
            this.config = { ...this.config, [key]: value }; // Tạo object mới để trigger reactivity
        },

        updateValueConfig(key:string, value:any){
            if (this.config.hasOwnProperty(key)) {
                this.config[key] = value; // Cập nhật giá trị của key
            }
            return
        },

        addAndUpdateKeyConfig(key:string, value:any) {
            if (this.config.hasOwnProperty(key)) {
                this.config[key] = value; 
                return
            }
            this.config = { ...this.config, [key]: value }; // Tạo object mới để trigger reactivity
        },
    },
    persist: {
        key: 'config',
        storage: localStorage,
    }, 
});


export function getDataFromDoc(doc) {
    const data = doc.data()
    data.id = doc.id
    return data
  }
  // lay du lieu tu get many document
  export function getDataFromDocs(data) {
    // const docs = data.docs
    // const listRes = []
    // for (const item of docs) {
    //   listRes.push(getDataFromDoc(item))
    // }
    // return listRes
    return data.docs.map(getDataFromDoc)
  }
  // Chuyển Json Object thành Json String rồi khởi tạo local storage 
  export function saveTolocalStorage(key,value) {
    localStorage.setItem(key, JSON.stringify(value))  
  }
  // Chuyển json thành Object rồi lấy dữ liệu từ local storage
  export function getItemlocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))  
  }

  export function removeItemFromLocalStorage(key) {
    localStorage.removeItem(key)
    
  }
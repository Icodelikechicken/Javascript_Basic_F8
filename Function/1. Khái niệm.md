**Hàm**

1. Định nghĩa:
- Một khối mã
- Làm một việc cụ thể

2. Phân loại
- Built-in
- Tự định nghĩa

3. Tính chất
- Không thực thi khi được định nghĩa
- Thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về giá trị

4. Tạo hàm đầu tiên

**Quy tắc đặt tên hàm**
- Không đưa số lên đầu
- Gồm chữ và số
- Không bao gồm ký tự đặc biệt

```js
function showDialog() {
    // code
    alert("Hi~ Xin chào các bạn.");
}

// Gọi hàm
showDialog();
```

**Tham số và đối số**

```js
function showMessage(message) {
    console.log(message);
}

showMessage("Xin chào ae đã đến với khóa học~")
```
- message: tham số (parameter)
- "Xin chào ae đã đến với khóa học~": đối số (argument)
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);

    // 切换删除线效果
    passwordInput.classList.toggle('删除线');

    // 切换眼睛图标
   
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交事件

    // 获取用户输入的数据
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 创建要发送的数据对象
    const loginData = {
        username: username,
        password: password
    };

    // 发送POST请求到后端
    fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData) // 将JavaScript对象转换为JSON字符串
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // 解析JSON数据
        } else {
            throw new Error('Something went wrong on api server!');
        }
    })
    .then(data => {
        console.log('Success:', data);
        // 处理成功的响应
    })
    .catch(error => {
        console.error('Error:', error);
        // 处理错误情况
    });
});

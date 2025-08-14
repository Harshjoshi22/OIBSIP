    
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const secureContent = document.getElementById('secure-content');
        const showRegister = document.getElementById('show-register');
        const showLogin = document.getElementById('show-login');
        const loginBtn = document.getElementById('login-btn');
        const registerBtn = document.getElementById('register-btn');
        const logoutBtn = document.getElementById('logout-btn');

      
        showRegister.addEventListener('click', () => {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });

        showLogin.addEventListener('click', () => {
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });

        
        loginBtn.addEventListener('click', () => {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                
                localStorage.setItem('currentUser', JSON.stringify(user));
                loginForm.classList.add('hidden');
                registerForm.classList.add('hidden');
                secureContent.classList.remove('hidden');
                document.getElementById('welcome-name').textContent = user.name;
            } else {
                alert('Invalid email or password');
            }
        });

        
        registerBtn.addEventListener('click', () => {
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            
            
            if (password !== confirmPassword) {
                alert("Passwords don't match");
                return;
            }
            
            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return;
            }
         
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
           
            if (users.some(user => user.email === email)) {
                alert('Email already registered');
                return;
            }
            
          
            const newUser = {
                name: name,
                email: email,
                password: password
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            registerForm.classList.add('hidden');
            secureContent.classList.remove('hidden');
            document.getElementById('welcome-name').textContent = newUser.name;
        });

        
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            secureContent.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });

        window.addEventListener('load', () => {
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                const user = JSON.parse(currentUser);
                loginForm.classList.add('hidden');
                registerForm.classList.add('hidden');
                secureContent.classList.remove('hidden');
                document.getElementById('welcome-name').textContent = user.name;
            }
        });
    
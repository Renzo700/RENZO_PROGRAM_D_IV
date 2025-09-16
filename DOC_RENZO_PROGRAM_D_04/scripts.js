
        // Funciones para los ejemplos interactivos
        function saludarUsuario() {
            const nombre = document.getElementById('nombreInput').value || 'visitante';
            document.getElementById('saludoOutput').textContent = `¡Hola ${nombre}! Bienvenido a la guía de JavaScript.`;
        }
        
        function manipularDOM() {
            const texto = document.getElementById('elementoTexto').value;
            const color = document.getElementById('colorSelect').value;
            
            const elemento = document.getElementById('textoDemo');
            elemento.textContent = texto || 'Este texto cambiará según lo que escribas.';
            elemento.style.color = color;
        }
        
        function validarFormularioDemo() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let esValido = true;
            
            // Reset errores
            document.getElementById('emailError').style.display = 'none';
            document.getElementById('passwordError').style.display = 'none';
            
            // Validar email
            if (!email || !email.includes('@')) {
                document.getElementById('emailError').style.display = 'block';
                esValido = false;
            }
            
            // Validar contraseña
            if (!password || password.length < 6) {
                document.getElementById('passwordError').style.display = 'block';
                esValido = false;
            }
            
            if (esValido) {
                document.getElementById('formSuccess').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'none';
                }, 3000);
            }
            
            return false; // Prevenir envío real para la demostración
        }
        
        function agregarElemento() {
            const texto = document.getElementById('nuevoElemento').value;
            if (!texto) return;
            
            const lista = document.getElementById('listaElementos');
            const nuevoElemento = document.createElement('div');
            nuevoElemento.className = 'dom-element';
            nuevoElemento.innerHTML = `
                <span>${texto}</span>
                <button onclick="eliminarElemento(this)">Eliminar</button>
            `;
            
            // Si es el primer elemento, eliminar el texto por defecto
            if (lista.querySelector('p')) {
                lista.innerHTML = '';
            }
            
            lista.appendChild(nuevoElemento);
            document.getElementById('nuevoElemento').value = '';
        }
        
        function eliminarElemento(boton) {
            const elemento = boton.parentElement;
            elemento.remove();
        }
        
        // Navegación suave al hacer clic en los enlaces
        document.querySelectorAll('.sidebar a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Actualizar clase activa
                document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            });
        });

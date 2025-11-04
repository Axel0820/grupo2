# 🗄️ Base de Datos Local con JSON Server

## ✅ Instalado y configurado correctamente

### 📋 Cómo usar:

#### 1️⃣ Iniciar el servidor de base de datos:
```bash
npm run server
```
Esto iniciará el servidor en: **http://localhost:3001**

#### 2️⃣ Iniciar React (en otra terminal):
```bash
npm start
```
Esto iniciará React en: **http://localhost:3000**

### 🔄 Funcionamiento:

#### **Formulario** (`/formulario`):
- Completa los campos
- Al enviar → guarda en la base de datos (POST)
- Los datos persisten al recargar la página

#### **Catálogo** (`/catalogo`):
- Muestra todos los pedidos de la base de datos (GET)
- Puedes eliminar pedidos (DELETE)
- Se actualiza automáticamente

### 📂 Archivo de base de datos:
- **Ubicación**: `db.json`
- Los datos se guardan aquí permanentemente
- Puedes editar este archivo manualmente

### 🌐 API Endpoints disponibles:
- Ver todos los pedidos: `GET http://localhost:3001/pedidos`
- Crear pedido: `POST http://localhost:3001/pedidos`
- Ver un pedido: `GET http://localhost:3001/pedidos/1`
- Actualizar pedido: `PUT http://localhost:3001/pedidos/1`
- Eliminar pedido: `DELETE http://localhost:3001/pedidos/1`


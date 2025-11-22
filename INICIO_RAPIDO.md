# 🚀 INICIO RÁPIDO - Generador QR Pro

## ⚡ Comandos para Empezar AHORA

### Opción 1: Copiar y Pegar en PowerShell

```powershell
# Ve a la carpeta de tu portafolio
cd "c:\Users\jhonc\Desktop\Mis Proyectos web\mi-portafolio"

# Inicia el servidor de desarrollo
npm run dev
```

Luego abre en tu navegador: **http://localhost:4321/qr-generator**

---

## 📋 Checklist de Verificación

Después de iniciar, verifica que todo funcione:

- [ ] ✅ El portafolio carga correctamente
- [ ] ✅ La sección "Proyectos" muestra 4 proyectos
- [ ] ✅ "QR Pro Generator" aparece como primer proyecto
- [ ] ✅ Al hacer click, va a `/qr-generator` (no abre nueva pestaña)
- [ ] ✅ La página del generador carga con gradiente morado
- [ ] ✅ Puedes generar un código QR
- [ ] ✅ El código se guarda en el historial
- [ ] ✅ Puedes descargar el código QR
- [ ] ✅ La búsqueda funciona
- [ ] ✅ Navbar y Footer están presentes

---

## 🎯 Prueba Rápida

### 1. Genera tu Primer QR
1. Ve a: http://localhost:4321/qr-generator
2. Tipo: URL / Sitio Web
3. URL: `https://github.com/informaticojhon`
4. Nombre: "Mi GitHub"
5. Click en "Generar Código QR"

### 2. Verifica el Historial
- Debe aparecer en el historial abajo
- Click en la tarjeta para ver detalles
- Descarga el QR en PNG

### 3. Prueba la Búsqueda
- Escribe "GitHub" en el buscador
- Debe filtrar el historial

---

## 🌐 URLs Importantes

| Página | URL Local |
|--------|-----------|
| Inicio | http://localhost:4321 |
| Generador QR | http://localhost:4321/qr-generator |
| Sección Proyectos | http://localhost:4321#proyectos |

---

## 🔥 Si Algo No Funciona

### Problema: Error al iniciar npm
```powershell
# Reinstala dependencias
npm install
npm run dev
```

### Problema: Página 404
```powershell
# Limpia y reconstruye
rm -r -force .astro, dist
npm run dev
```

### Problema: Cambios no se ven
```powershell
# Ctrl + C para detener el servidor
# Luego inicia de nuevo
npm run dev
```

---

## 📦 Para Deploy (Cuando Estés Listo)

```powershell
# Construye el proyecto
npm run build

# Previsualiza la build
npm run preview
```

La carpeta `dist/` contendrá tu sitio listo para subir.

---

## 🎨 Personalización Rápida

### Cambiar Color del Gradiente

Edita `src/pages/qr-generator.astro`, línea ~120:

```css
--primary-color: #667eea;     /* Cambia este */
--secondary-color: #764ba2;   /* Y este */
```

### Cambiar Orden de Proyectos

Edita `src/components/Proyectos.astro`, línea ~8:

Mueve el objeto del proyecto hacia arriba o abajo en el array.

---

## 💡 Tips Finales

1. **Siempre guarda** tus cambios antes de probar
2. **Recarga la página** (F5) si no ves cambios
3. **Revisa la consola** si algo falla (F12 en el navegador)
4. **Documenta** cualquier problema que encuentres

---

## 🎉 ¡Listo para Empezar!

```powershell
cd "c:\Users\jhonc\Desktop\Mis Proyectos web\mi-portafolio"
npm run dev
```

**¡Diviértete probando tu nuevo generador QR!** 🚀

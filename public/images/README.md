# Logos del Header

## Instrucciones para agregar los logos

### 1. Logo del Hero (`logo-hero.png`)

- **Uso**: Se muestra durante el hero (transparente)
- **Recomendaciones**:
  - Formato: PNG con transparencia
  - Tamaño: Máximo 200px de ancho
  - Color: Preferiblemente blanco o claro para contraste sobre video
  - Estilo: Logo principal de tu marca

### 2. Logo después del Scroll (`logo-scroll.png`)

- **Uso**: Se muestra después del hero (fondo blanco)
- **Recomendaciones**:
  - Formato: PNG con transparencia
  - Tamaño: Máximo 200px de ancho
  - Color: Preferiblemente oscuro para contraste sobre fondo blanco
  - Estilo: Mismo logo pero adaptado para fondo claro

## Estructura de archivos:

```
public/images/
├── logo-hero.png      # Logo para el hero (transparente)
├── logo-scroll.png    # Logo para después del scroll (fondo blanco)
└── README.md          # Este archivo
```

## Notas técnicas:

- Los logos se intercambian automáticamente al hacer scroll
- Transición suave de 0.5s entre logos
- Tamaño responsive: se adaptan a diferentes pantallas
- Si no tienes los logos, el sistema mostrará texto alternativo

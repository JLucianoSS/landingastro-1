export interface SolucionData {
  id: string;
  title: string;
  description: string;
  features: string[];
  highlightedFeatures: string[];
  icon: string;
}

export const solucionesData: SolucionData[] = [
  {
    id: "conectividad-avanzada",
    title: "Conectividad Avanzada",
    description: "Soluciones de red de última generación para conectar y optimizar tu infraestructura tecnológica",
    features: [
      "Switches L2/L3",
      "Routers",
      "SD-WAN",
      "Redes inalámbricas WiFi 6/6E",
      "Controladoras LAN/WLAN",
      "Segmentación de red (VLAN, VXLAN)",
      "DNS/DHCP/IPAM (DDI)",
      "SASE (Security Access Service Edge)",
      "ADC (Application Delivery Controller)",
      "NAC (Network Access Control)"
    ],
    highlightedFeatures: [
      // "SASE (Security Access Service Edge)",
      // "ADC (Application Delivery Controller)",
      // "NAC (Network Access Control)"
    ],
    icon: "/images/soluciones/conectividad-avanzada.png"
  },
  {
    id: "cloud-plataformas-digitales",
    title: "Cloud & Plataformas Digitales",
    description: "Transformación digital completa con servicios en la nube y plataformas colaborativas",
    features: [
      "Infraestructura como servicio (IaaS)",
      "Plataformas como servicio (PaaS)",
      "Software como servicio (SaaS)",
      "Plataformas de colaboración (M365, GWS)",
      "Backup y DRaaS en la nube"
    ],
    highlightedFeatures: [],
    icon: "/images/soluciones/cloud-plat.png"
  },
  {
    id: "data-center",
    title: "Data Center",
    description: "Infraestructura de centro de datos robusta y eficiente para el corazón de tu organización",
    features: [
      "Servidores blade y rack",
      "Virtualización de servidores",
      "Hiperconvergencia (HCI)",
      "Backup y recuperación",
      "Almacenamiento",
      "Sistemas de energía (UPS)",
      "Climatización",
      "Cableado estructurado",
      "Surveillance System"
    ],
    highlightedFeatures: [],
    icon: "/images/soluciones/data-center.png"
  },
  {
    id: "gobierno-riesgo-cumplimiento",
    title: "Gobierno, Riesgo y Cumplimiento",
    description: "Gestión integral de riesgos y cumplimiento normativo para una operación segura y confiable",
    features: [
      "Sistemas de gestión ISO (27001, 22301, 20000, 37001)",
      "Gestión de riesgos (ISO 31000, NIST RMF)",
      "Auditorías de seguridad y cumplimiento",
      "Evaluación de madurez de ciberseguridad",
      "Certificaciones y mantenimientos"
    ],
    highlightedFeatures: [],
    icon: "/images/soluciones/gob-riesgo-cum.png"
  },
  {
    id: "confianza-digital-identidades",
    title: "Confianza Digital y Protección de Identidades",
    description: "Protección avanzada de identidades y gestión de acceso para mantener la confianza digital",
    features: [
      "Gestión de identidades (IAM)",
      "Privileged Access Management (PAM)",
      "Autenticación multifactor (MFA)",
      "Zero Trust Network Access (ZTNA)",
      "Passwordless / biometría",
      "Single Sign-On (SSO)",
      "Digital Rights Management (DRM)",
      "Brand Protection",
      "Data Loss Prevention (DLP)",
      "ACCESO SEGURO (VPN)"
    ],
    highlightedFeatures: [
      // "Data Loss Prevention (DLP)",
      // "ACCESO SEGURO (VPN)"
    ],
    icon: "/images/soluciones/confianza-digital.png"
  },
  {
    id: "proteccion-avanzada-amenazas",
    title: "Protección Avanzada Contra Amenazas",
    description: "Defensa multicapa contra amenazas cibernéticas con tecnologías de última generación",
    features: [
      "Next-Gen Firewalls (NGFW)",
      "EDR (Endpoint Detection & Response)",
      "XDR (Extended Detection & Response)",
      "Next-Gen SIEM (Security Information & Event)",
      "Sandboxing/ATP",
      "Protección DDoS",
      "Protección de correo electrónico",
      "Seguridad web gateway (SWG)",
      "WAF (web application firewall)",
      "SSE (secure service edge)",
      "Gestión de Vulnerabilidades",
      "Seguridad cloud (CSPM, CWPP, CASB)",
      "NDR (Network Detection and Response)",
      "IPS (Intrusion Prevention System)"
    ],
    highlightedFeatures: [
      // "WAF (web application firewall)",
      // "SSE (secure service edge)",
      // "Gestión de Vulnerabilidades",
      // "Seguridad cloud (CSPM, CWPP, CASB)",
      // "NDR (Network Detection and Response)",
      // "IPS (Intrusion Prevention System)"
    ],
    icon: "/images/soluciones/proteccion-avanzada-amenazas.png"
  },
  {
    id: "tecnologias-nueva-generacion",
    title: "Tecnologías de Nueva Generación",
    description: "Innovación tecnológica de vanguardia para impulsar el futuro de tu organización",
    features: [
      "Inteligencia Artificial aplicada a seguridad",
      "SOAR (Automatización de respuesta)",
      "Blockchain empresarial",
      "IoT Security",
      "OT Security",
      "Gemelos digitales (Digital Twins)",
      "Gestión de red con IA (AIOps)"
    ],
    highlightedFeatures: [],
    icon: "/images/soluciones/tec-nueva-generacion.png"
  },
  {
    id: "proteccion-experiencia-digital",
    title: "Protección de la Experiencia Digital",
    description: "Tecnologías orientadas a garantizar que los usuarios finales perciban una experiencia segura, confiable y de alto rendimiento en sus interacciones con aplicaciones, servicios digitales y plataformas críticas del negocio",
    features: [
      "Network Performance Monitor (NPM)",
      "Application Performance Monitoring (APM)",
      "Netflow Traffic Analyzer (NTA)",
      "CDN (Content Delivery Network)",
      "Monitoreo de infraestructura DCIM",
      "Bot Management",
      "Server & application Monitor (SAM)",
      "ADEM",
      "MDM-UEM"
    ],
    highlightedFeatures: [
      // "MDM-UEM"
    ],
    icon: "/images/soluciones/proteccion-experiencia.png"
  }
];

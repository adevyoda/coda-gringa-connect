import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"; // Corrigido: usar import

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Estas cores referenciam as variáveis CSS definidas em src/index.css
				// Certifique-se de atualizar os valores HSL dessas variáveis lá
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Usando o Azul Escuro do logo
					foreground: 'hsl(var(--primary-foreground))' // Cor do texto no botão primário (idealmente Branco do logo)
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))', // Usando o Azul Claro do logo
					foreground: 'hsl(var(--secondary-foreground))' // Cor do texto no botão secundário (idealmente Azul Escuro do logo)
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))', // Cor para ações destrutivas (manter padrão ou ajustar)
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))', // Cor para elementos menos proeminentes
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))', // Cor de destaque (pode ser Amarelo ou Laranja do logo)
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))', // Fundo de popovers
					foreground: 'hsl(var(--popover-foreground))' // Cor do texto em popovers
				},
				card: {
					DEFAULT: 'hsl(var(--card))', // Fundo de cards
					foreground: 'hsl(var(--card-foreground))' // Cor do texto em cards
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Removendo a paleta 'coda' antiga para evitar conflitos e limpar o código
				// Se você ainda precisar de alguma cor específica da paleta antiga,
				// pode adicioná-la individualmente aqui ou em src/index.css como uma nova variável CSS.

				// Opcional: Adicionar as cores restantes do logo como cores personalizadas
				// Se você definiu estas como variáveis CSS no index.css (ex: --brand-amarelo, --brand-laranja)
				// pode referenciá-las aqui para usar classes como `bg-brandAmarelo`:
				// brandAmarelo: 'hsl(var(--brand-amarelo))',
				// brandLaranja: 'hsl(var(--brand-laranja))',
				// Ou, se preferir usar os valores diretos aqui (menos flexível para temas):
				logoAmarelo: '#fbdc0e',
				logoLaranja: '#f5a524',
				logoBranco: '#ffffff', // Já coberto por --background na maioria dos casos
				logoAzulClaro: '#5dc0fe', // Já coberto por --secondary na maioria dos casos
				logoAzulEscuro: '#1571c6', // Já coberto por --primary na maioria dos casos

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-up': 'fade-up 0.7s ease-out forwards'
			},
			backgroundImage: {
				// Ajustando os gradientes para usar as novas variáveis semânticas de cor
				'hero-gradient': 'linear-gradient(90deg, hsl(var(--secondary)) 0%, hsl(var(--primary)) 100%)',
				// Assumindo que o gradiente do card é um cinza claro, ajustamos para usar muted e background
				'card-gradient': 'linear-gradient(to right, hsl(var(--muted)) 0%, hsl(var(--background)) 100%)'
			}
		}
	},
	plugins: [tailwindcssAnimate], // Corrigido: usar a variável importada
} satisfies Config;
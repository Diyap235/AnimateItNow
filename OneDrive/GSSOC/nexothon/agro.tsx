import React, { useState, useRef } from 'react';
import { Camera, MessageCircle, Leaf, Users, Phone, Mail, MapPin, Upload, Send, Bot, User } from 'lucide-react';

const AgroGuardianAI = () => {
  const [language, setLanguage] = useState('english');
  const [capturedImage, setCapturedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Translations
  const translations = {
    english: {
      title: "AgroGuardian AI: Nurturing Tomorrow's Harvest",
      subtitle: "Smart Solutions for Modern Farming",
      navigation: {
        home: "Home",
        about: "About Us", 
        schemes: "Government Schemes",
        contact: "Contact"
      },
      hero: {
        heading: "Empowering Farmers with AI-Powered Crop Solutions",
        description: "Upload or capture images of your crops and get instant AI-powered disease detection, treatment recommendations, and farming guidance.",
        cta: "Start Crop Analysis"
      },
      cropAnalysis: {
        title: "Crop Analysis & AI Chat",
        imageSection: "Capture or Upload Crop Image",
        chatSection: "AI Assistant",
        capture: "Take Photo",
        upload: "Upload Image",
        analyzing: "Analyzing your crop...",
        placeholder: "Ask me about your crops, diseases, or farming techniques...",
        send: "Send"
      },
      schemes: {
        title: "Government Schemes for Farmers",
        subtitle: "Explore beneficial schemes by Indian Government"
      },
      about: {
        title: "About AgroGuardian AI",
        description: "We combine cutting-edge artificial intelligence with agricultural expertise to help farmers identify crop diseases early, get treatment recommendations, and improve their harvest quality."
      },
      contact: {
        title: "Contact Us",
        phone: "+91 98765 43210",
        email: "support@agroguardian.ai",
        address: "Agricultural Technology Center, Gujarat, India"
      }
    },
    hindi: {
      title: "एग्रोगार्डियन एआई: कल की फसल का पोषण",
      subtitle: "आधुनिक कृषि के लिए स्मार्ट समाधान",
      navigation: {
        home: "होम",
        about: "हमारे बारे में",
        schemes: "सरकारी योजनाएं",
        contact: "संपर्क"
      },
      hero: {
        heading: "एआई-संचालित फसल समाधान के साथ किसानों को सशक्त बनाना",
        description: "अपनी फसलों की तस्वीरें अपलोड या कैप्चर करें और तुरंत एआई-संचालित रोग की पहचान प्राप्त करें।",
        cta: "फसल विश्लेषण शुरू करें"
      },
      cropAnalysis: {
        title: "फसल विश्लेषण और एआई चैट",
        imageSection: "फसल की छवि कैप्चर या अपलोड करें",
        chatSection: "एआई सहायक",
        capture: "फोटो लें",
        upload: "छवि अपलोड करें",
        analyzing: "आपकी फसल का विश्लेषण कर रहे हैं...",
        placeholder: "अपनी फसलों के बारे में पूछें...",
        send: "भेजें"
      },
      schemes: {
        title: "किसानों के लिए सरकारी योजनाएं",
        subtitle: "भारत सरकार की लाभकारी योजनाओं का अन्वेषण करें"
      },
      about: {
        title: "एग्रोगार्डियन एआई के बारे में",
        description: "हम किसानों को फसल की बीमारियों की जल्दी पहचान करने और उपचार की सिफारिशें प्राप्त करने में मदद करते हैं।"
      },
      contact: {
        title: "संपर्क करें",
        phone: "+91 98765 43210",
        email: "support@agroguardian.ai",
        address: "कृषि प्रौद्योगिकी केंद्र, गुजरात, भारत"
      }
    },
    gujarati: {
      title: "એગ્રોગાર્ડિયન એઆઈ: આવતીકાલની ફસલનું પોષણ",
      subtitle: "આધુનિક ખેતી માટે સ્માર્ટ સોલ્યુશન્સ",
      navigation: {
        home: "હોમ",
        about: "અમારા વિશે",
        schemes: "સરકારી યોજનાઓ",
        contact: "સંપર્ક"
      },
      hero: {
        heading: "એઆઈ-સંચાલિત પાક સોલ્યુશન્સ સાથે ખેડૂતોને સશક્ત બનાવવું",
        description: "તમારી ફસલની છબીઓ અપલોડ અથવા કેપ્ચર કરો અને તાત્કાલિક એઆઈ-સંચાલિત રોગ શોધ મેળવો।",
        cta: "પાક વિશ્લેષણ શરૂ કરો"
      },
      cropAnalysis: {
        title: "પાક વિશ્લેષણ અને એઆઈ ચેટ",
        imageSection: "પાકની છબી કેપ્ચર અથવા અપલોડ કરો",
        chatSection: "એઆઈ સહાયક",
        capture: "ફોટો લો",
        upload: "છબી અપલોડ કરો",
        analyzing: "તમારી પાકનું વિશ્લેષણ કરી રહ્યા છીએ...",
        placeholder: "તમારી ફસલો વિશે પૂછો...",
        send: "મોકલો"
      },
      schemes: {
        title: "ખેડૂતો માટે સરકારી યોજનાઓ",
        subtitle: "ભારત સરકારની ફાયદાકારક યોજનાઓનું અન્વેષણ કરો"
      },
      about: {
        title: "એગ્રોગાર્ડિયન એઆઈ વિશે",
        description: "અમે ખેડૂતોને પાકના રોગોની વહેલી ઓળખ કરવામાં અને સારવારની ભલામણો મેળવવામાં મદદ કરીએ છીએ।"
      },
      contact: {
        title: "અમારો સંપર્ક કરો",
        phone: "+91 98765 43210",
        email: "support@agroguardian.ai", 
        address: "કૃષિ ટેકનોલોજી સેન્ટર, ગુજરાત, ભારત"
      }
    }
  };

  const governmentSchemes = [
    {
      name: {
        english: "PM-KISAN Samman Nidhi",
        hindi: "पीएम-किसान सम्मान निधि", 
        gujarati: "પીએમ-કિસાન સમ્માન નિધિ"
      },
      description: {
        english: "Direct income support of ₹6,000 per year to small and marginal farmers",
        hindi: "छोटे और सीमांत किसानों को प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता",
        gujarati: "નાના અને સીમાંત ખેડૂતોને વર્ષે ₹6,000 ની પ્રત્યક્ષ આવક સહાય"
      }
    },
    {
      name: {
        english: "Pradhan Mantri Fasal Bima Yojana",
        hindi: "प्रधानमंत्री फसल बीमा योजना",
        gujarati: "પ્રધાનમંત્રી ફસલ વીમા યોજના"
      },
      description: {
        english: "Crop insurance scheme providing financial support against crop loss",
        hindi: "फसल हानि के विरुद्ध वित्तीय सहायता प्रदान करने वाली फसल बीमा योजना",
        gujarati: "પાકના નુકસાન સામે નાણાકીય સહાય પ્રદાન કરતી પાક વીમા યોજના"
      }
    },
    {
      name: {
        english: "Soil Health Card Scheme",
        hindi: "मृदा स्वास्थ्य कार्ड योजना",
        gujarati: "માટી આરોગ્ય કાર્ડ યોજના"
      },
      description: {
        english: "Free soil testing and nutrient management recommendations",
        hindi: "मुफ्त मिट्टी परीक्षण और पोषक तत्व प्रबंधन की सिफारिशें",
        gujarati: "મફત માટી પરીક્ષણ અને પોષક તત્વ વ્યવસ્થાપનની ભલામણો"
      }
    }
  ];

  const t = translations[language];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Camera access denied. Please use the upload option instead.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        setCapturedImage(url);
        stopCamera();
        analyzeCrop(url);
      });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCapturedImage(url);
      analyzeCrop(url);
    }
  };

  const analyzeCrop = async (imageUrl) => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const diseases = [
        {
          name: "Early Blight",
          severity: "Moderate",
          confidence: "87%",
          treatment: ["Apply copper-based fungicide", "Remove affected leaves", "Improve air circulation"],
          prevention: ["Crop rotation", "Use resistant varieties", "Proper spacing"]
        },
        {
          name: "Leaf Spot",
          severity: "Mild",
          confidence: "78%",
          treatment: ["Apply neem oil spray", "Reduce watering frequency", "Improve drainage"],
          prevention: ["Avoid overhead watering", "Remove fallen leaves", "Apply organic mulch"]
        }
      ];
      
      const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
      
      const botMessage = {
        type: 'bot',
        content: `🌱 **Crop Analysis Complete**

**Disease Detected:** ${randomDisease.name}
**Severity:** ${randomDisease.severity}
**Confidence:** ${randomDisease.confidence}

**Immediate Treatment:**
${randomDisease.treatment.map(item => `• ${item}`).join('\n')}

**Prevention Tips:**
${randomDisease.prevention.map(item => `• ${item}`).join('\n')}

Would you like more specific guidance for your farming conditions?`
      };
      
      setChatMessages(prev => [...prev, botMessage]);
      setIsAnalyzing(false);
    }, 3000);
  };

  const sendMessage = () => {
    if (userMessage.trim()) {
      const userMsg = { type: 'user', content: userMessage };
      setChatMessages(prev => [...prev, userMsg]);
      setUserMessage('');
      
      setTimeout(() => {
        const responses = [
          "Based on your question, I recommend checking soil moisture levels and ensuring proper drainage. Would you like specific guidance for your crop type?",
          "That's a great question about pest management! For organic solutions, try neem oil spray in the evening hours. What type of pests are you seeing?",
          "For better yields, consider proper spacing, timely irrigation, and balanced fertilization. Which aspect would you like me to explain in detail?"
        ];
        
        const botMsg = {
          type: 'bot',
          content: responses[Math.floor(Math.random() * responses.length)]
        };
        setChatMessages(prev => [...prev, botMsg]);
      }, 1500);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-500 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-green-800">{t.title}</h1>
                <p className="text-green-600 text-sm">{t.subtitle}</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-green-700 hover:text-green-900 font-medium">
                {t.navigation.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-green-700 hover:text-green-900 font-medium">
                {t.navigation.about}
              </button>
              <button onClick={() => scrollToSection('schemes')} className="text-green-700 hover:text-green-900 font-medium">
                {t.navigation.schemes}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-green-700 hover:text-green-900 font-medium">
                {t.navigation.contact}
              </button>
            </nav>
            
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-green-100 border-green-300 text-green-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
            >
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
              <option value="gujarati">ગુજરાતી</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">{t.hero.heading}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">{t.hero.description}</p>
          <button 
            onClick={() => scrollToSection('analysis')}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Main Crop Analysis Section */}
      <section id="analysis" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">{t.cropAnalysis.title}</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Image Capture Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                <Camera className="h-6 w-6 mr-2" />
                {t.cropAnalysis.imageSection}
              </h3>
              
              <div className="space-y-6">
                {/* Camera Feed/Image Display */}
                <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80">
                  {capturedImage ? (
                    <img 
                      src={capturedImage} 
                      alt="Captured crop" 
                      className="w-full h-full object-cover"
                    />
                  ) : isCameraActive ? (
                    <video 
                      ref={videoRef}
                      autoPlay 
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-green-50">
                      <div className="text-center text-green-600">
                        <Camera className="h-16 w-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">Ready to analyze your crops</p>
                        <p className="text-sm opacity-75">Capture or upload an image to start</p>
                      </div>
                    </div>
                  )}
                  
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-lg">{t.cropAnalysis.analyzing}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {!isCameraActive ? (
                    <button
                      onClick={startCamera}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Camera className="h-5 w-5" />
                      <span>{t.cropAnalysis.capture}</span>
                    </button>
                  ) : (
                    <button
                      onClick={capturePhoto}
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Camera className="h-5 w-5" />
                      <span>Capture Now</span>
                    </button>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Upload className="h-5 w-5" />
                    <span>{t.cropAnalysis.upload}</span>
                  </button>
                </div>
                
                {capturedImage && (
                  <button
                    onClick={() => {
                      setCapturedImage(null);
                      setChatMessages([]);
                    }}
                    className="w-full bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Clear & Try Again
                  </button>
                )}
              </div>
            </div>

            {/* Chat Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center">
                <Bot className="h-6 w-6 mr-2" />
                {t.cropAnalysis.chatSection}
              </h3>
              
              <div className="flex flex-col h-96">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto bg-gray-50 rounded-lg p-4 mb-4 space-y-4">
                  {chatMessages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-16">
                      <Bot className="h-12 w-12 mx-auto mb-4 text-green-500" />
                      <p className="font-medium">Hello! I'm your AI farming assistant.</p>
                      <p className="text-sm mt-2">Upload a crop image or ask me any farming questions!</p>
                    </div>
                  ) : (
                    chatMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-white border-2 border-green-200 text-gray-800'
                        }`}>
                          <div className="flex items-start space-x-2">
                            {message.type === 'bot' && <Bot className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />}
                            {message.type === 'user' && <User className="h-4 w-4 text-white mt-1 flex-shrink-0" />}
                            <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                {/* Chat Input */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder={t.cropAnalysis.placeholder}
                    className="flex-1 border-2 border-green-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!userMessage.trim()}
                    className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <canvas ref={canvasRef} className="hidden" />
      </section>

      {/* Government Schemes Section */}
      <section id="schemes" className="py-16 bg-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">{t.schemes.title}</h2>
            <p className="text-green-600 text-lg">{t.schemes.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {governmentSchemes.map((scheme, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-green-800 mb-3">{scheme.name[language]}</h3>
                <p className="text-gray-700 mb-4">{scheme.description[language]}</p>
                <button className="text-green-600 hover:text-green-800 font-medium">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg max-w-4xl mx-auto">
              <h4 className="text-lg font-bold text-yellow-800 mb-2">💡 Pro Tip</h4>
              <p className="text-yellow-700">
                Register for multiple schemes to maximize benefits. Most schemes have online application processes. 
                Contact your local agricultural officer for assistance with applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">{t.about.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.about.description}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-green-500 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                <Camera className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Smart Detection</h3>
              <p className="text-gray-600">AI-powered crop disease identification with high accuracy and instant results</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-emerald-500 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">24/7 AI assistant providing personalized farming advice and solutions</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-700 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-800 transition-colors">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Farmer Community</h3>
              <p className="text-gray-600">Connect with fellow farmers and access government scheme information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t.contact.title}</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-3 text-green-300" />
                <h4 className="text-lg font-bold mb-2">Phone</h4>
                <p className="text-green-200">{t.contact.phone}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-3 text-green-300" />
                <h4 className="text-lg font-bold mb-2">Email</h4>
                <p className="text-green-200">{t.contact.email}</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-3 text-green-300" />
                <h4 className="text-lg font-bold mb-2">Address</h4>
                <p className="text-green-200">{t.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-green-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">AgroGuardian AI</h3>
          </div>
          <p className="text-green-300 mb-4">Empowering farmers with intelligent agricultural solutions</p>
          <p className="text-green-400 text-sm">© 2025 AgroGuardian AI. Made with ❤️ for farmers.</p>
        </div>
      </footer>
    </div>
  );
};

export default AgroGuardianAI;
              
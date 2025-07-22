// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Play, Pause, RotateCcw, Volume2, Mic, MicOff,
//   FileText, Headphones, Zap, ArrowLeft
// } from 'lucide-react';
//
// const AIServiceDemo = ({ selectedService }) => {
//   const navigate = useNavigate();
//   const params = useParams();
//
//   const currentService = selectedService || {
//     id: params.serviceId || 'text-to-speech',
//     name: params.serviceId === 'speech-to-text' ? 'Speech-to-Text' : 'Text-to-Speech'
//   };
//
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [transcriptionText, setTranscriptionText] = useState('');
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [animationStep, setAnimationStep] = useState(0);
//   const [audioError, setAudioError] = useState(null);
//
//   const audioRef = useRef(null);
//   const transcriptionIntervalRef = useRef(null);
//
//   const demoContent = {
//     'text-to-speech': {
//       text: "Are you frustrated with generating flat voice overs that make your videos sound amateurish? We are here to solve the problem with ultra-realistic narration at low cost with high quality.",
//       audioUrl: "https://audio.jukehost.co.uk/2npvCO1dSGlsJSr5aPjShHAeoMqnRBqp"
//     },
//     'speech-to-text': {
//       simulatedTranscription: "  Are you frustrated with generating text content from multi lingual audio Content? We are here to solve the problem with advanced AI Solutions at low cost with high quality text transcription.",
//       audioUrl: "https://audio.jukehost.co.uk/FENJRDuahY2zQZZFDXVLMAEdzoay9KTj"
//     }
//   };
//
//   const handleBack = () => {
//     navigate('/ai-services-ecosystem');
//   };
//
//   // Clear any running intervals
//   const clearTranscriptionInterval = () => {
//     if (transcriptionIntervalRef.current) {
//       clearInterval(transcriptionIntervalRef.current);
//       transcriptionIntervalRef.current = null;
//     }
//   };
//
//   // TTS handlers
//   const handleTTSPlay = async () => {
//     if (audioRef.current) {
//       try {
//         setAudioError(null);
//         await audioRef.current.play();
//         setIsPlaying(true);
//         // Set duration if not already set
//         if (duration === 0 && audioRef.current.duration) {
//           setDuration(audioRef.current.duration);
//         }
//       } catch (error) {
//         console.error('Error playing audio:', error);
//         setAudioError('Failed to play audio. Please check your audio file.');
//         setIsPlaying(false);
//       }
//     }
//   };
//
//   const handleTTSPause = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//     setIsPlaying(false);
//   };
//
//   const handleTTSReset = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//     setIsPlaying(false);
//     setCurrentTime(0);
//   };
//
//   // STT handler
//   const handleSTTRecord = async () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsLoading(true);
//     setIsRecording(true);
//     setAudioError(null);
//
//     const words = demoContent['speech-to-text'].simulatedTranscription.split(' ');
//     let wordIndex = 0;
//
//     // Start audio playback
//     if (audioRef.current) {
//       try {
//         audioRef.current.currentTime = 0;
//         await audioRef.current.play();
//       } catch (error) {
//         console.error('Error playing audio:', error);
//         setAudioError('Failed to play audio. Please check your audio file.');
//       }
//     }
//
//     // Simulate transcription
//     transcriptionIntervalRef.current = setInterval(() => {
//       if (wordIndex < words.length) {
//         setTranscriptionText(prev => prev + (wordIndex === 0 ? '' : ' ') + words[wordIndex]);
//         wordIndex++;
//       } else {
//         setIsLoading(false);
//         setIsRecording(false);
//         clearTranscriptionInterval();
//       }
//     }, 400);
//   };
//
//   const handleSTTReset = () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsRecording(false);
//     setIsLoading(false);
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };
//
//   // Audio event handlers
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//
//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const handleEnded = () => {
//       setIsPlaying(false);
//       if (currentService?.id === 'speech-to-text') {
//         setIsRecording(false);
//         setIsLoading(false);
//         clearTranscriptionInterval();
//       }
//     };
//
//     const handleLoadedMetadata = () => {
//       setDuration(audio.duration || 0);
//     };
//
//     const handleError = (e) => {
//       console.error('Audio error:', e);
//       setAudioError('Audio file could not be loaded.');
//       setIsPlaying(false);
//       setIsRecording(false);
//       setIsLoading(false);
//     };
//
//     audio.addEventListener('timeupdate', updateTime);
//     audio.addEventListener('ended', handleEnded);
//     audio.addEventListener('loadedmetadata', handleLoadedMetadata);
//     audio.addEventListener('error', handleError);
//
//     return () => {
//       audio.removeEventListener('timeupdate', updateTime);
//       audio.removeEventListener('ended', handleEnded);
//       audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       audio.removeEventListener('error', handleError);
//     };
//   }, [currentService?.id]);
//
//   // Animation effect
//   useEffect(() => {
//     if (isPlaying || isRecording) {
//       const interval = setInterval(() => {
//         setAnimationStep(prev => (prev + 1) % 4);
//       }, 500);
//       return () => clearInterval(interval);
//     }
//   }, [isPlaying, isRecording]);
//
//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       clearTranscriptionInterval();
//     };
//   }, []);
//
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };
//
//   const renderTextToSpeechDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
//           <Volume2 size={16} className="mr-2 text-blue-600" />
//           <span className="text-sm font-semibold text-blue-800">Text-to-Speech Demo</span>
//         </div>
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">Convert Text to Natural Speech</h2>
//         <p className="text-gray-600">Experience our AI-powered voice synthesis technology</p>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Input Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
//           {demoContent['text-to-speech'].text}
//         </div>
//       </div>
//
//       {/* Audio Element */}
//       <audio ref={audioRef} src={demoContent['text-to-speech'].audioUrl} preload="auto" hidden />
//
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
//         <div className="flex items-center mb-6">
//           <Headphones size={20} className="text-blue-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Generated Speech</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex items-center space-x-1">
//             {[...Array(20)].map((_, i) => (
//               <div
//                 key={i}
//                 className={`w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
//                   isPlaying ? 'animate-pulse' : ''
//                 }`}
//                 style={{
//                   height: isPlaying ? `${20 + Math.sin(i * 0.5 + animationStep) * 15}px` : '8px',
//                   animationDelay: `${i * 50}ms`
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={isPlaying ? handleTTSPause : handleTTSPlay}
//               disabled={isLoading}
//               className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//             >
//               {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//             </button>
//             <button
//               onClick={handleTTSReset}
//               className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-200"
//             >
//               <RotateCcw size={16} />
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             {formatTime(currentTime)} / {formatTime(duration)}
//           </div>
//         </div>
//
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-100"
//             style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
//           />
//         </div>
//       </div>
//
//       {/* Features */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
//             <Zap size={16} className="text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Real-time Processing</h4>
//           <p className="text-sm text-gray-600">Generate speech in under 200ms</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
//             <Volume2 size={16} className="text-purple-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Natural Voices</h4>
//           <p className="text-sm text-gray-600">Human-like speech synthesis</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
//             <FileText size={16} className="text-green-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">SSML Support</h4>
//           <p className="text-sm text-gray-600">Advanced markup control</p>
//         </div>
//       </div>
//     </div>
//   );
//
//   const renderSpeechToTextDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
//           <Mic size={16} className="mr-2 text-green-600" />
//           <span className="text-sm font-semibold text-green-800">Speech-to-Text Demo</span>
//         </div>
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">Convert Speech to Accurate Text</h2>
//         <p className="text-gray-600">Click play to stream transcription from demo audio</p>
//       </div>
//
//       <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
//         <div className="flex items-center mb-6">
//           <Mic size={20} className="text-green-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Speech Input</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         {/* Audio for STT */}
//         <audio ref={audioRef} src={demoContent['speech-to-text'].audioUrl} preload="auto" hidden />
//
//         <div className="flex items-center justify-center space-x-4">
//           <button
//             onClick={handleSTTRecord}
//             disabled={isLoading}
//             className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//           >
//             <Play size={20} className="mr-2 inline" />
//             Play Demo Audio
//           </button>
//           <button
//             onClick={handleSTTReset}
//             className="px-4 py-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-all duration-200"
//           >
//             <RotateCcw size={20} />
//           </button>
//         </div>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Transcribed Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] relative">
//           {isLoading && !transcriptionText ? (
//             <div className="flex items-center justify-center h-full">
//               <div className="flex items-center space-x-2 text-gray-500">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
//                 <span className="ml-2 text-sm">Processing speech...</span>
//               </div>
//             </div>
//           ) : transcriptionText ? (
//             <div className="text-gray-700 leading-relaxed">
//               {transcriptionText}
//               {isRecording && (
//                 <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse" />
//               )}
//             </div>
//           ) : (
//             <div className="text-gray-400 text-center py-8">
//               Click "Play Demo Audio" to begin transcription
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
//
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-4xl mx-auto px-6 py-8">
//         <button
//           onClick={handleBack}
//           className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 mb-8"
//         >
//           <ArrowLeft size={16} className="mr-2" />
//           Back to Demo
//         </button>
//
//         {currentService?.id === 'text-to-speech' && renderTextToSpeechDemo()}
//         {currentService?.id === 'speech-to-text' && renderSpeechToTextDemo()}
//       </div>
//     </div>
//   );
// };
//
// export default AIServiceDemo;

// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Play, Pause, RotateCcw, Volume2, Mic,
//   FileText, Headphones, Zap, ArrowLeft,
//   Clock, ShieldCheck, DollarSign
// } from 'lucide-react';
//
// const AIServiceDemo = ({ selectedService }) => {
//   const navigate = useNavigate();
//   const params = useParams();
//
//   const currentService = selectedService || {
//     id: params.serviceId || 'text-to-speech',
//     name: params.serviceId === 'speech-to-text' ? 'Speech-to-Text' : 'Text-to-Speech'
//   };
//
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [transcriptionText, setTranscriptionText] = useState('');
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [audioError, setAudioError] = useState(null);
//
//   const audioRef = useRef(null);
//   const transcriptionIntervalRef = useRef(null);
//
//   const demoContent = {
//     'text-to-speech': {
//       text: "Are you frustrated with generating flat voice overs that make your videos sound amateurish? We are here to solve the problem with ultra-realistic narration at low cost with high quality.",
//       audioUrl: "https://audio.jukehost.co.uk/2npvCO1dSGlsJSr5aPjShHAeoMqnRBqp"
//     },
//     'speech-to-text': {
//       simulatedTranscription: "    Are you frustrated with generating text content from multi lingual audio Content? We are here to solve the problem with advanced AI Solutions at low cost with high quality text transcription.                                                                            ",
//       audioUrl: "https://audio.jukehost.co.uk/FENJRDuahY2zQZZFDXVLMAEdzoay9KTj"
//     }
//   };
//
//   const handleBack = () => {
//     navigate('/ai-services-ecosystem');
//   };
//
//   const clearTranscriptionInterval = () => {
//     if (transcriptionIntervalRef.current) {
//       clearInterval(transcriptionIntervalRef.current);
//       transcriptionIntervalRef.current = null;
//     }
//   };
//
//   // TTS handlers
//   const handleTTSPlay = async () => {
//     if (audioRef.current) {
//       try {
//         setAudioError(null);
//         await audioRef.current.play();
//         setIsPlaying(true);
//         if (duration === 0 && audioRef.current.duration) {
//           setDuration(audioRef.current.duration);
//         }
//       } catch (error) {
//         setAudioError('Failed to play audio. Please check your audio file.');
//         setIsPlaying(false);
//       }
//     }
//   };
//
//   const handleTTSPause = () => {
//     if (audioRef.current) audioRef.current.pause();
//     setIsPlaying(false);
//   };
//
//   const handleTTSReset = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//     setIsPlaying(false);
//     setCurrentTime(0);
//   };
//
//   // STT handler
//   const handleSTTRecord = async () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsLoading(true);
//     setIsRecording(true);
//     setAudioError(null);
//
//     // BUG FIX: Use trim() and split by regex to prevent empty strings that cause "undefined"
//     const words = demoContent['speech-to-text'].simulatedTranscription.trim().split(/\s+/);
//     let wordIndex = 0;
//
//     if (audioRef.current) {
//       try {
//         audioRef.current.currentTime = 0;
//         await audioRef.current.play();
//       } catch (error) {
//         setAudioError('Failed to play audio. Please check your audio file.');
//       }
//     }
//
//     transcriptionIntervalRef.current = setInterval(() => {
//       if (wordIndex < words.length) {
//         setTranscriptionText(prev => prev + (wordIndex === 0 ? '' : ' ') + words[wordIndex]);
//         wordIndex++;
//       } else {
//         setIsLoading(false);
//         setIsRecording(false);
//         clearTranscriptionInterval();
//       }
//     }, 250);
//   };
//
//   const handleSTTReset = () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsRecording(false);
//     setIsLoading(false);
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };
//
//   // Audio event handlers
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//
//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const handleEnded = () => {
//       setIsPlaying(false);
//       if (currentService?.id === 'speech-to-text') {
//         setIsRecording(false);
//         setIsLoading(false);
//         clearTranscriptionInterval();
//       }
//     };
//     const handleLoadedMetadata = () => setDuration(audio.duration || 0);
//     const handleError = (e) => {
//       setAudioError('Audio file could not be loaded.');
//       setIsPlaying(false);
//       setIsRecording(false);
//       setIsLoading(false);
//     };
//
//     audio.addEventListener('timeupdate', updateTime);
//     audio.addEventListener('ended', handleEnded);
//     audio.addEventListener('loadedmetadata', handleLoadedMetadata);
//     audio.addEventListener('error', handleError);
//
//     return () => {
//       audio.removeEventListener('timeupdate', updateTime);
//       audio.removeEventListener('ended', handleEnded);
//       audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       audio.removeEventListener('error', handleError);
//     };
//   }, [currentService?.id]);
//
//   useEffect(() => () => clearTranscriptionInterval(), []);
//
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };
//
//   const renderTextToSpeechDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
//           <Volume2 size={16} className="mr-2 text-blue-600" />
//           <span className="text-sm font-semibold text-blue-800">Text-to-Speech Demo</span>
//         </div>
//         <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//           Convert Text to Natural Speech
//         </h2>
//         <p className="text-gray-600">Experience our AI-powered voice synthesis technology</p>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Input Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
//           {demoContent['text-to-speech'].text}
//         </div>
//       </div>
//
//       <audio ref={audioRef} src={demoContent['text-to-speech'].audioUrl} preload="auto" hidden />
//
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
//         <div className="flex items-center mb-6">
//           <Headphones size={20} className="text-blue-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Generated Speech</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={isPlaying ? handleTTSPause : handleTTSPlay}
//               disabled={isLoading}
//               className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//             >
//               {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//             </button>
//             <button
//               onClick={handleTTSReset}
//               className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-200"
//             >
//               <RotateCcw size={16} />
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             {formatTime(currentTime)} / {formatTime(duration)}
//           </div>
//         </div>
//
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-100"
//             style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
//           />
//         </div>
//       </div>
//
//       {/* ADDED: Feature sections for TTS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
//             <Zap size={16} className="text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Real-time Processing</h4>
//           <p className="text-sm text-gray-600">Generate speech in under 200ms</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
//             <Volume2 size={16} className="text-purple-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Natural Voices</h4>
//           <p className="text-sm text-gray-600">Human-like speech synthesis</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
//             <FileText size={16} className="text-green-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">SSML Support</h4>
//           <p className="text-sm text-gray-600">Advanced markup control</p>
//         </div>
//       </div>
//     </div>
//   );
//
//   const renderSpeechToTextDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
//           <Mic size={16} className="mr-2 text-green-600" />
//           <span className="text-sm font-semibold text-green-800">Speech-to-Text Demo</span>
//         </div>
//         <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//           Convert Speech to Accurate Text
//         </h2>
//         <p className="text-gray-600">Click play to stream transcription from demo audio</p>
//       </div>
//
//       <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
//         <div className="flex items-center mb-6">
//           <Mic size={20} className="text-green-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Speech Input</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         <audio ref={audioRef} src={demoContent['speech-to-text'].audioUrl} preload="auto" hidden />
//
//         <div className="flex items-center justify-center space-x-4">
//           <button
//             onClick={handleSTTRecord}
//             disabled={isLoading || isRecording}
//             className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//           >
//             <Play size={20} className="mr-2 inline" />
//             Play Demo Audio
//           </button>
//           <button
//             onClick={handleSTTReset}
//             className="px-4 py-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-all duration-200"
//           >
//             <RotateCcw size={20} />
//           </button>
//         </div>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Transcribed Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] relative">
//           {isLoading && !transcriptionText ? (
//             <div className="flex items-center justify-center h-full">
//               <div className="flex items-center space-x-2 text-gray-500">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
//                 <span className="ml-2 text-sm">Processing speech...</span>
//               </div>
//             </div>
//           ) : transcriptionText ? (
//             <div className="text-gray-700 leading-relaxed">
//               {transcriptionText}
//               {isRecording && (
//                 <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse" />
//               )}
//             </div>
//           ) : (
//             <div className="text-gray-400 text-center py-8">
//               Click "Play Demo Audio" to begin transcription
//             </div>
//           )}
//         </div>
//       </div>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
//             <ShieldCheck size={16} className="text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">High Accuracy</h4>
//           <p className="text-sm text-gray-600">Industry-leading transcription precision</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
//             <Clock size={16} className="text-green-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">24-Hour Delivery</h4>
//           <p className="text-sm text-gray-600">Fast turnarounds for all your audio files</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
//             <DollarSign size={16} className="text-purple-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Cost-Effective</h4>
//           <p className="text-sm text-gray-600">Affordable pricing for projects of any scale</p>
//         </div>
//       </div>
//     </div>
//   );
//
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 py-8">
//         <button
//           onClick={handleBack}
//           className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 mb-8"
//         >
//           <ArrowLeft size={16} className="mr-2" />
//           Back to Services
//         </button>
//
//         {currentService?.id === 'text-to-speech' && renderTextToSpeechDemo()}
//         {currentService?.id === 'speech-to-text' && renderSpeechToTextDemo()}
//       </div>
//     </div>
//   );
// };
//
// export default AIServiceDemo;


// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Play, Pause, RotateCcw, Volume2, Mic,
//   FileText, Headphones, Zap, ArrowLeft,
//   Clock, ShieldCheck, DollarSign
// } from 'lucide-react';
//
// const AIServiceDemo = () => {
//   const navigate = useNavigate();
//   const { serviceId } = useParams(); // Get serviceId from URL
//
//   // Default to text-to-speech if no ID is provided
//   const currentServiceId = serviceId || 'text-to-speech';
//
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [transcriptionText, setTranscriptionText] = useState('');
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [audioError, setAudioError] = useState(null);
//
//   const audioRef = useRef(null);
//   const transcriptionIntervalRef = useRef(null);
//
//   const demoContent = {
//     'text-to-speech': {
//       name: 'Text-to-Speech',
//       text: "Are you frustrated with generating flat voice overs that make your videos sound amateurish? We are here to solve the problem with ultra-realistic narration at low cost with high quality.",
//       audioUrl: "https://audio.jukehost.co.uk/2npvCO1dSGlsJSr5aPjShHAeoMqnRBqp"
//     },
//     'speech-to-text': {
//       name: 'Speech-to-Text',
//       simulatedTranscription: "Are you frustrated with generating text content from multi lingual audio Content? We are here to solve the problem with advanced AI Solutions at low cost with high quality text transcription.",
//       audioUrl: "https://audio.jukehost.co.uk/FENJRDuahY2zQZZFDXVLMAEdzoay9KTj"
//     }
//   };
//
//   // This function now navigates to the homepage
//   const handleBack = () => {
//     navigate('/');
//   };
//
//   const clearTranscriptionInterval = () => {
//     if (transcriptionIntervalRef.current) {
//       clearInterval(transcriptionIntervalRef.current);
//       transcriptionIntervalRef.current = null;
//     }
//   };
//
//   // TTS handlers
//   const handleTTSPlay = async () => {
//     if (audioRef.current) {
//       try {
//         setAudioError(null);
//         await audioRef.current.play();
//         setIsPlaying(true);
//         if (duration === 0 && audioRef.current.duration) {
//           setDuration(audioRef.current.duration);
//         }
//       } catch (error) {
//         setAudioError('Failed to play audio. Please check your audio file.');
//         setIsPlaying(false);
//       }
//     }
//   };
//
//   const handleTTSPause = () => {
//     if (audioRef.current) audioRef.current.pause();
//     setIsPlaying(false);
//   };
//
//   const handleTTSReset = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//     setIsPlaying(false);
//     setCurrentTime(0);
//   };
//
//   // STT handler
//   const handleSTTRecord = async () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsLoading(true);
//     setIsRecording(true);
//     setAudioError(null);
//
//     const words = demoContent['speech-to-text'].simulatedTranscription.trim().split(/\s+/);
//     let wordIndex = 0;
//
//     if (audioRef.current) {
//       try {
//         audioRef.current.currentTime = 0;
//         await audioRef.current.play();
//       } catch (error) {
//         setAudioError('Failed to play audio. Please check your audio file.');
//       }
//     }
//
//     transcriptionIntervalRef.current = setInterval(() => {
//       if (wordIndex < words.length) {
//         setTranscriptionText(prev => prev + (wordIndex === 0 ? '' : ' ') + words[wordIndex]);
//         wordIndex++;
//       } else {
//         setIsLoading(false);
//         setIsRecording(false);
//         clearTranscriptionInterval();
//       }
//     }, 250);
//   };
//
//   const handleSTTReset = () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsRecording(false);
//     setIsLoading(false);
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };
//
//   // Audio event handlers
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//
//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const handleEnded = () => {
//       setIsPlaying(false);
//       if (currentServiceId === 'speech-to-text') {
//         setIsRecording(false);
//         setIsLoading(false);
//         clearTranscriptionInterval();
//       }
//     };
//     const handleLoadedMetadata = () => setDuration(audio.duration || 0);
//     const handleError = (e) => {
//       setAudioError('Audio file could not be loaded.');
//       setIsPlaying(false);
//       setIsRecording(false);
//       setIsLoading(false);
//     };
//
//     audio.addEventListener('timeupdate', updateTime);
//     audio.addEventListener('ended', handleEnded);
//     audio.addEventListener('loadedmetadata', handleLoadedMetadata);
//     audio.addEventListener('error', handleError);
//
//     return () => {
//       audio.removeEventListener('timeupdate', updateTime);
//       audio.removeEventListener('ended', handleEnded);
//       audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       audio.removeEventListener('error', handleError);
//     };
//   }, [currentServiceId]);
//
//   useEffect(() => () => clearTranscriptionInterval(), []);
//
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };
//
//   const renderTextToSpeechDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
//           <Volume2 size={16} className="mr-2 text-blue-600" />
//           <span className="text-sm font-semibold text-blue-800">Text-to-Speech Demo</span>
//         </div>
//         <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//           Convert Text to Natural Speech
//         </h2>
//         <p className="text-gray-600">Experience our AI-powered voice synthesis technology</p>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Input Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
//           {demoContent['text-to-speech'].text}
//         </div>
//       </div>
//
//       <audio ref={audioRef} src={demoContent['text-to-speech'].audioUrl} preload="auto" hidden />
//
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
//         <div className="flex items-center mb-6">
//           <Headphones size={20} className="text-blue-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Generated Speech</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={isPlaying ? handleTTSPause : handleTTSPlay}
//               disabled={isLoading}
//               className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//             >
//               {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//             </button>
//             <button
//               onClick={handleTTSReset}
//               className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-200"
//             >
//               <RotateCcw size={16} />
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             {formatTime(currentTime)} / {formatTime(duration)}
//           </div>
//         </div>
//
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-100"
//             style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
//           />
//         </div>
//       </div>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
//             <Zap size={16} className="text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Real-time Processing</h4>
//           <p className="text-sm text-gray-600">Generate speech in under 200ms</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
//             <Volume2 size={16} className="text-purple-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Natural Voices</h4>
//           <p className="text-sm text-gray-600">Human-like speech synthesis</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
//             <FileText size={16} className="text-green-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">SSML Support</h4>
//           <p className="text-sm text-gray-600">Advanced markup control</p>
//         </div>
//       </div>
//     </div>
//   );
//
//   const renderSpeechToTextDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
//           <Mic size={16} className="mr-2 text-green-600" />
//           <span className="text-sm font-semibold text-green-800">Speech-to-Text Demo</span>
//         </div>
//         <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//           Convert Speech to Accurate Text
//         </h2>
//         <p className="text-gray-600">Click play to stream transcription from demo audio</p>
//       </div>
//
//       <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
//         <div className="flex items-center mb-6">
//           <Mic size={20} className="text-green-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Speech Input</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         <audio ref={audioRef} src={demoContent['speech-to-text'].audioUrl} preload="auto" hidden />
//
//         <div className="flex items-center justify-center space-x-4">
//           <button
//             onClick={handleSTTRecord}
//             disabled={isLoading || isRecording}
//             className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//           >
//             <Play size={20} className="mr-2 inline" />
//             Play Demo Audio
//           </button>
//           <button
//             onClick={handleSTTReset}
//             className="px-4 py-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-all duration-200"
//           >
//             <RotateCcw size={20} />
//           </button>
//         </div>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Transcribed Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] relative">
//           {isLoading && !transcriptionText ? (
//             <div className="flex items-center justify-center h-full">
//               <div className="flex items-center space-x-2 text-gray-500">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
//                 <span className="ml-2 text-sm">Processing speech...</span>
//               </div>
//             </div>
//           ) : transcriptionText ? (
//             <div className="text-gray-700 leading-relaxed">
//               {transcriptionText}
//               {isRecording && (
//                 <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse" />
//               )}
//             </div>
//           ) : (
//             <div className="text-gray-400 text-center py-8">
//               Click "Play Demo Audio" to begin transcription
//             </div>
//           )}
//         </div>
//       </div>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
//             <ShieldCheck size={16} className="text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">High Accuracy</h4>
//           <p className="text-sm text-gray-600">Industry-leading transcription precision</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
//             <Clock size={16} className="text-green-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">24-Hour Delivery</h4>
//           <p className="text-sm text-gray-600">Fast turnarounds for all your audio files</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
//             <DollarSign size={16} className="text-purple-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Cost-Effective</h4>
//           <p className="text-sm text-gray-600">Affordable pricing for projects of any scale</p>
//         </div>
//       </div>
//     </div>
//   );
//
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 py-8">
//         <button
//           onClick={handleBack}
//           className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 mb-8"
//         >
//           <ArrowLeft size={16} className="mr-2" />
//           Back to Home
//         </button>
//
//         {currentServiceId === 'text-to-speech' && renderTextToSpeechDemo()}
//         {currentServiceId === 'speech-to-text' && renderSpeechToTextDemo()}
//       </div>
//     </div>
//   );
// };
//
// export default AIServiceDemo;
// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {
//   Play, Pause, RotateCcw, Volume2, Mic,
//   FileText, Headphones, Zap, ArrowLeft,
//   Clock, ShieldCheck, DollarSign
// } from 'lucide-react';
//
// const AIServiceDemo = () => {
//   const navigate = useNavigate();
//   const { serviceId } = useParams(); // Get serviceId from URL
//
//   // Default to text-to-speech if no ID is provided in the URL
//   const currentServiceId = serviceId || 'text-to-speech';
//
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [transcriptionText, setTranscriptionText] = useState('');
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [audioError, setAudioError] = useState(null);
//
//   const audioRef = useRef(null);
//   const transcriptionIntervalRef = useRef(null);
//
//   const demoContent = {
//     'text-to-speech': {
//       name: 'Text-to-Speech',
//       text: "Are you frustrated with generating flat voice overs that make your videos sound amateurish? We are here to solve the problem with ultra-realistic narration at low cost with high quality.",
//       audioUrl: "https://audio.jukehost.co.uk/2npvCO1dSGlsJSr5aPjShHAeoMqnRBqp"
//     },
//     'speech-to-text': {
//       name: 'Speech-to-Text',
//       simulatedTranscription: "Are you frustrated with generating text content from multi lingual audio Content? We are here to solve the problem with advanced AI Solutions at low cost with high quality text transcription.",
//       audioUrl: "https://audio.jukehost.co.uk/FENJRDuahY2zQZZFDXVLMAEdzoay9KTj"
//     }
//   };
//
//   // This function now navigates to the homepage
//   const handleBack = () => {
//     navigate('/');
//   };
//
//   const clearTranscriptionInterval = () => {
//     if (transcriptionIntervalRef.current) {
//       clearInterval(transcriptionIntervalRef.current);
//       transcriptionIntervalRef.current = null;
//     }
//   };
//
//   // --- All other functions (handleTTSPlay, handleSTTRecord, etc.) remain the same ---
//   // TTS handlers
//   const handleTTSPlay = async () => {
//     if (audioRef.current) {
//       try {
//         setAudioError(null);
//         await audioRef.current.play();
//         setIsPlaying(true);
//         if (duration === 0 && audioRef.current.duration) {
//           setDuration(audioRef.current.duration);
//         }
//       } catch (error) {
//         setAudioError('Failed to play audio. Please check your audio file.');
//         setIsPlaying(false);
//       }
//     }
//   };
//
//   const handleTTSPause = () => {
//     if (audioRef.current) audioRef.current.pause();
//     setIsPlaying(false);
//   };
//
//   const handleTTSReset = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//     setIsPlaying(false);
//     setCurrentTime(0);
//   };
//
//   // STT handler
//   const handleSTTRecord = async () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsLoading(true);
//     setIsRecording(true);
//     setAudioError(null);
//
//     const words = demoContent['speech-to-text'].simulatedTranscription.trim().split(/\s+/);
//     let wordIndex = 0;
//
//     if (audioRef.current) {
//       try {
//         audioRef.current.currentTime = 0;
//         await audioRef.current.play();
//       } catch (error) {
//         setAudioError('Failed to play audio. Please check your audio file.');
//       }
//     }
//
//     transcriptionIntervalRef.current = setInterval(() => {
//       if (wordIndex < words.length) {
//         setTranscriptionText(prev => prev + (wordIndex === 0 ? '' : ' ') + words[wordIndex]);
//         wordIndex++;
//       } else {
//         setIsLoading(false);
//         setIsRecording(false);
//         clearTranscriptionInterval();
//       }
//     }, 250);
//   };
//
//   const handleSTTReset = () => {
//     clearTranscriptionInterval();
//     setTranscriptionText('');
//     setIsRecording(false);
//     setIsLoading(false);
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }
//   };
//
//   // Audio event handlers
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//
//     const updateTime = () => setCurrentTime(audio.currentTime);
//     const handleEnded = () => {
//       setIsPlaying(false);
//       if (currentServiceId === 'speech-to-text') {
//         setIsRecording(false);
//         setIsLoading(false);
//         clearTranscriptionInterval();
//       }
//     };
//     const handleLoadedMetadata = () => setDuration(audio.duration || 0);
//     const handleError = (e) => {
//       setAudioError('Audio file could not be loaded.');
//       setIsPlaying(false);
//       setIsRecording(false);
//       setIsLoading(false);
//     };
//
//     audio.addEventListener('timeupdate', updateTime);
//     audio.addEventListener('ended', handleEnded);
//     audio.addEventListener('loadedmetadata', handleLoadedMetadata);
//     audio.addEventListener('error', handleError);
//
//     return () => {
//       audio.removeEventListener('timeupdate', updateTime);
//       audio.removeEventListener('ended', handleEnded);
//       audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       audio.removeEventListener('error', handleError);
//     };
//   }, [currentServiceId]);
//
//   useEffect(() => () => clearTranscriptionInterval(), []);
//
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };
//
//   const renderTextToSpeechDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
//           <Volume2 size={16} className="mr-2 text-blue-600" />
//           <span className="text-sm font-semibold text-blue-800">Text-to-Speech Demo</span>
//         </div>
//         <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//           Convert Text to Natural Speech
//         </h2>
//         <p className="text-gray-600">Experience our AI-powered voice synthesis technology</p>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Input Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
//           {demoContent['text-to-speech'].text}
//         </div>
//       </div>
//
//       <audio ref={audioRef} src={demoContent['text-to-speech'].audioUrl} preload="auto" hidden />
//
//       <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
//         <div className="flex items-center mb-6">
//           <Headphones size={20} className="text-blue-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Generated Speech</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={isPlaying ? handleTTSPause : handleTTSPlay}
//               disabled={isLoading}
//               className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//             >
//               {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//             </button>
//             <button
//               onClick={handleTTSReset}
//               className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-200"
//             >
//               <RotateCcw size={16} />
//             </button>
//           </div>
//           <div className="text-sm text-gray-600">
//             {formatTime(currentTime)} / {formatTime(duration)}
//           </div>
//         </div>
//
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-100"
//             style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
//           />
//         </div>
//       </div>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
//             <Zap size={16} className="text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Real-time Processing</h4>
//           <p className="text-sm text-gray-600">Generate speech in under 200ms</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
//             <Volume2 size={16} className="text-purple-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Natural Voices</h4>
//           <p className="text-sm text-gray-600">Human-like speech synthesis</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
//             <FileText size={16} className="text-green-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">SSML Support</h4>
//           <p className="text-sm text-gray-600">Advanced markup control</p>
//         </div>
//       </div>
//     </div>
//   );
//
//   const renderSpeechToTextDemo = () => (
//     <div className="space-y-8">
//       <div className="text-center">
//         <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
//           <Mic size={16} className="mr-2 text-green-600" />
//           <span className="text-sm font-semibold text-green-800">Speech-to-Text Demo</span>
//         </div>
//         <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//           Convert Speech to Accurate Text
//         </h2>
//         <p className="text-gray-600">Click play to stream transcription from demo audio</p>
//       </div>
//
//       <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
//         <div className="flex items-center mb-6">
//           <Mic size={20} className="text-green-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Speech Input</h3>
//         </div>
//
//         {audioError && (
//           <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
//             {audioError}
//           </div>
//         )}
//
//         <audio ref={audioRef} src={demoContent['speech-to-text'].audioUrl} preload="auto" hidden />
//
//         <div className="flex items-center justify-center space-x-4">
//           <button
//             onClick={handleSTTRecord}
//             disabled={isLoading || isRecording}
//             className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg disabled:opacity-50"
//           >
//             <Play size={20} className="mr-2 inline" />
//             Play Demo Audio
//           </button>
//           <button
//             onClick={handleSTTReset}
//             className="px-4 py-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-all duration-200"
//           >
//             <RotateCcw size={20} />
//           </button>
//         </div>
//       </div>
//
//       <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//         <div className="flex items-center mb-4">
//           <FileText size={20} className="text-gray-600 mr-2" />
//           <h3 className="text-lg font-semibold text-gray-900">Transcribed Text</h3>
//         </div>
//         <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] relative">
//           {isLoading && !transcriptionText ? (
//             <div className="flex items-center justify-center h-full">
//               <div className="flex items-center space-x-2 text-gray-500">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
//                 <span className="ml-2 text-sm">Processing speech...</span>
//               </div>
//             </div>
//           ) : transcriptionText ? (
//             <div className="text-gray-700 leading-relaxed">
//               {transcriptionText}
//               {isRecording && (
//                 <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse" />
//               )}
//             </div>
//           ) : (
//             <div className="text-gray-400 text-center py-8">
//               Click "Play Demo Audio" to begin transcription
//             </div>
//           )}
//         </div>
//       </div>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
//             <ShieldCheck size={16} className="text-blue-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">High Accuracy</h4>
//           <p className="text-sm text-gray-600">Industry-leading transcription precision</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
//             <Clock size={16} className="text-green-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">24-Hour Delivery</h4>
//           <p className="text-sm text-gray-600">Fast turnarounds for all your audio files</p>
//         </div>
//         <div className="bg-white rounded-lg p-4 border border-gray-200">
//           <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
//             <DollarSign size={16} className="text-purple-600" />
//           </div>
//           <h4 className="font-semibold text-gray-900 mb-1">Cost-Effective</h4>
//           <p className="text-sm text-gray-600">Affordable pricing for projects of any scale</p>
//         </div>
//       </div>
//     </div>
//   );
//
//
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 py-8">
//         <button
//           onClick={handleBack}
//           className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 mb-8"
//         >
//           <ArrowLeft size={16} className="mr-2" />
//           Back to Home
//         </button>
//
//         {/* The content is now decided purely by the URL parameter */}
//         {currentServiceId === 'text-to-speech' && renderTextToSpeechDemo()}
//         {currentServiceId === 'speech-to-text' && renderSpeechToTextDemo()}
//       </div>
//     </div>
//   );
// };
//
// export default AIServiceDemo;
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Play, Pause, RotateCcw, Volume2, Mic,
  FileText, Headphones, Zap, ArrowLeft,
  Clock, ShieldCheck, DollarSign
} from 'lucide-react';

const AIServiceDemo = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams(); // Get serviceId from URL

  // Default to text-to-speech if no ID is provided in the URL
  const currentServiceId = serviceId || 'text-to-speech';

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcriptionText, setTranscriptionText] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [audioError, setAudioError] = useState(null);

  const audioRef = useRef(null);
  const transcriptionIntervalRef = useRef(null);

  const demoContent = {
    'text-to-speech': {
      name: 'Text-to-Speech',
      text: "Are you frustrated with generating flat voice overs that make your videos sound amateurish? We are here to solve the problem with ultra-realistic narration at low cost with high quality.",
      audioUrl: "https://audio.jukehost.co.uk/2npvCO1dSGlsJSr5aPjShHAeoMqnRBqp"
    },
    'speech-to-text': {
      name: 'Speech-to-Text',
      simulatedTranscription: "Are you frustrated with generating text content from multi lingual audio Content? We are here to solve the problem with advanced AI Solutions at low cost with high quality text transcription.",
      audioUrl: "https://audio.jukehost.co.uk/FENJRDuahY2zQZZFDXVLMAEdzoay9KTj"
    }
  };

  // This function now navigates to the homepage
  const handleBack = () => {
    navigate(-1);
  };

  const clearTranscriptionInterval = () => {
    if (transcriptionIntervalRef.current) {
      clearInterval(transcriptionIntervalRef.current);
      transcriptionIntervalRef.current = null;
    }
  };

  // --- All other functions (handleTTSPlay, handleSTTRecord, etc.) remain the same ---
  // TTS handlers
  const handleTTSPlay = async () => {
    if (audioRef.current) {
      try {
        setAudioError(null);
        await audioRef.current.play();
        setIsPlaying(true);
        if (duration === 0 && audioRef.current.duration) {
          setDuration(audioRef.current.duration);
        }
      } catch (error) {
        setAudioError('Failed to play audio. Please check your audio file.');
        setIsPlaying(false);
      }
    }
  };

  const handleTTSPause = () => {
    if (audioRef.current) audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleTTSReset = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // STT handler
  const handleSTTRecord = async () => {
    clearTranscriptionInterval();
    setTranscriptionText('');
    setIsLoading(true);
    setIsRecording(true);
    setAudioError(null);

    const words = demoContent['speech-to-text'].simulatedTranscription.trim().split(/\s+/);
    let wordIndex = 0;

    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        setAudioError('Failed to play audio. Please check your audio file.');
      }
    }

    transcriptionIntervalRef.current = setInterval(() => {
      if (wordIndex < words.length) {
        setTranscriptionText(prev => prev + (wordIndex === 0 ? '' : ' ') + words[wordIndex]);
        wordIndex++;
      } else {
        setIsLoading(false);
        setIsRecording(false);
        clearTranscriptionInterval();
      }
    }, 250);
  };

  const handleSTTReset = () => {
    clearTranscriptionInterval();
    setTranscriptionText('');
    setIsRecording(false);
    setIsLoading(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setIsPlaying(false);
      if (currentServiceId === 'speech-to-text') {
        setIsRecording(false);
        setIsLoading(false);
        clearTranscriptionInterval();
      }
    };
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleError = (e) => {
      setAudioError('Audio file could not be loaded.');
      setIsPlaying(false);
      setIsRecording(false);
      setIsLoading(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('error', handleError);
    };
  }, [currentServiceId]);

  useEffect(() => () => clearTranscriptionInterval(), []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const renderTextToSpeechDemo = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
          <Volume2 size={16} className="mr-2 text-blue-600" />
          <span className="text-sm font-semibold text-blue-800">Text-to-Speech Demo</span>
        </div>
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Convert Text to Natural Speech
        </h2>
        <p className="text-gray-600">Experience our AI-powered voice synthesis technology</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <FileText size={20} className="text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Input Text</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
          {demoContent['text-to-speech'].text}
        </div>
      </div>

      <audio ref={audioRef} src={demoContent['text-to-speech'].audioUrl} preload="auto" hidden />

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center mb-6">
          <Headphones size={20} className="text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Generated Speech</h3>
        </div>

        {audioError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
            {audioError}
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={isPlaying ? handleTTSPause : handleTTSPlay}
              disabled={isLoading}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg disabled:opacity-50"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={handleTTSReset}
              className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-200"
            >
              <RotateCcw size={16} />
            </button>
          </div>
          <div className="text-sm text-gray-600">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-100"
            style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
            <Zap size={16} className="text-blue-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Real-time Processing</h4>
          <p className="text-sm text-gray-600">Generate speech in under 200ms</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
            <Volume2 size={16} className="text-purple-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Natural Voices</h4>
          <p className="text-sm text-gray-600">Human-like speech synthesis</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
            <FileText size={16} className="text-green-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">SSML Support</h4>
          <p className="text-sm text-gray-600">Advanced markup control</p>
        </div>
      </div>
    </div>
  );

  const renderSpeechToTextDemo = () => (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
          <Mic size={16} className="mr-2 text-green-600" />
          <span className="text-sm font-semibold text-green-800">Speech-to-Text Demo</span>
        </div>
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Convert Speech to Accurate Text
        </h2>
        <p className="text-gray-600">Click play to stream transcription from demo audio</p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-center mb-6">
          <Mic size={20} className="text-green-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Speech Input</h3>
        </div>

        {audioError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-200 rounded-lg text-red-700 text-sm">
            {audioError}
          </div>
        )}

        <audio ref={audioRef} src={demoContent['speech-to-text'].audioUrl} preload="auto" hidden />

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleSTTRecord}
            disabled={isLoading || isRecording}
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg disabled:opacity-50"
          >
            <Play size={20} className="mr-2 inline" />
            Play Demo Audio
          </button>
          <button
            onClick={handleSTTReset}
            className="px-4 py-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-all duration-200"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center mb-4">
          <FileText size={20} className="text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Transcribed Text</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] relative">
          {isLoading && !transcriptionText ? (
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="ml-2 text-sm">Processing speech...</span>
              </div>
            </div>
          ) : transcriptionText ? (
            <div className="text-gray-700 leading-relaxed">
              {transcriptionText}
              {isRecording && (
                <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse" />
              )}
            </div>
          ) : (
            <div className="text-gray-400 text-center py-8">
              Click "Play Demo Audio" to begin transcription
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
            <ShieldCheck size={16} className="text-blue-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">High Accuracy</h4>
          <p className="text-sm text-gray-600">Industry-leading transcription precision</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
            <Clock size={16} className="text-green-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">24-Hour Delivery</h4>
          <p className="text-sm text-gray-600">Fast turnarounds for all your audio files</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
            <DollarSign size={16} className="text-purple-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-1">Cost-Effective</h4>
          <p className="text-sm text-gray-600">Affordable pricing for projects of any scale</p>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200 mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Services
        </button>

        {/* The content is now decided purely by the URL parameter */}
        {currentServiceId === 'text-to-speech' && renderTextToSpeechDemo()}
        {currentServiceId === 'speech-to-text' && renderSpeechToTextDemo()}
      </div>
    </div>
  );
};

export default AIServiceDemo;


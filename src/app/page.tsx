'use client';

import { useState } from 'react';
import Prism from '@/components/Prism';
import StaggeredMenu from '@/components/StaggeredMenu';

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const menuItems = [
    { label: 'Главная', link: '#home', ariaLabel: 'Перейти на главную' },
    { label: 'Каталог', link: '#catalog', ariaLabel: 'Посмотреть каталог карт' },
    { label: 'О нас', link: '#about', ariaLabel: 'Узнать о нас' },
    { label: 'Контакты', link: '#contact', ariaLabel: 'Связаться с нами' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'Telegram', link: 'https://t.me' },
    { label: 'VK', link: 'https://vk.com' }
  ];

  const holographicCards = [
    {
      id: 1,
      name: 'Голографическая карта "Дракон"',
      price: '2500 ₽',
      image: '/card1.jpg',
      rarity: 'Легендарная',
      description: 'Эксклюзивная голографическая карта с мерцающим эффектом дракона'
    },
    {
      id: 2,
      name: 'Голографическая карта "Феникс"',
      price: '3000 ₽',
      image: '/card2.jpg',
      rarity: 'Мифическая',
      description: 'Уникальная карта с огненным голографическим эффектом'
    },
    {
      id: 3,
      name: 'Голографическая карта "Единорог"',
      price: '2800 ₽',
      image: '/card3.jpg',
      rarity: 'Редкая',
      description: 'Магическая карта с радужным голографическим покрытием'
    },
    {
      id: 4,
      name: 'Голографическая карта "Волк"',
      price: '2200 ₽',
      image: '/card4.jpg',
      rarity: 'Эпическая',
      description: 'Мистическая карта с серебристым голографическим эффектом'
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      {/* Фон с Prism эффектом */}
      <div className="fixed inset-0 z-0">
        <Prism
          animationType="rotate"
          transparent={true}
          glow={1.2}
          colorFrequency={0.8}
          hueShift={0.3}
          timeScale={0.3}
        />
      </div>

      {/* Меню */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <StaggeredMenu
            items={menuItems}
            socialItems={socialItems}
            accentColor="#6366f1"
            colors={['#6366f1', '#8b5cf6']}
            menuButtonColor="#1f2937"
            openMenuButtonColor="#1f2937"
          />
        </div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 min-h-screen">
        {/* Секция Hero */}
        <section id="home" className="min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ГОЛОГРАФИЧЕСКИЕ
                </span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                КАРТЫ
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
              Эксклюзивная коллекция голографических карт с уникальными эффектами
            </p>
            <button
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Посмотреть каталог
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>

        {/* Секция каталога */}
        <section id="catalog" className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  КАТАЛОГ
                </span>
              </h2>
              <p className="text-xl text-gray-700">Выберите свою уникальную голографическую карту</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {holographicCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-gray-200/50"
                  onClick={() => openModal(card)}
                >
                  <div className="aspect-[3/4] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                      ✨
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                        {card.rarity}
                      </span>
                      <span className="text-lg font-bold text-gray-900">{card.price}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">{card.name}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция О нас */}
        <section id="about" className="py-20 px-8 bg-gray-50/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                О НАС
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Мы специализируемся на создании и продаже уникальных голографических карт с потрясающими визуальными эффектами.
              Каждая карта создается с использованием передовых технологий голографии и является произведением искусства.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Уникальный дизайн</h3>
                <p className="text-gray-600">Каждая карта имеет эксклюзивный дизайн и неповторимые голографические эффекты</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Высокое качество</h3>
                <p className="text-gray-600">Используем только лучшие материалы и новейшие технологии производства</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Быстрая доставка</h3>
                <p className="text-gray-600">Доставляем по всей России в кратчайшие сроки с гарантией сохранности</p>
              </div>
            </div>
          </div>
        </section>

        {/* Секция контактов */}
        <section id="contact" className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                КОНТАКТЫ
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-12">Свяжитесь с нами для заказа или получения консультации</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Электронная почта</h3>
                <p className="text-lg text-indigo-600">info@holografic-cards.ru</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Телефон</h3>
                <p className="text-lg text-indigo-600">+7 (999) 123-45-67</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Модальное окно */}
      {selectedCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="aspect-[3/4] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl opacity-70">✨</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    {selectedCard.rarity}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{selectedCard.name}</h2>
                <p className="text-gray-600 text-lg">{selectedCard.description}</p>
                <div className="text-3xl font-bold text-indigo-600">{selectedCard.price}</div>
                <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Купить сейчас
                </button>
                <button className="w-full border-2 border-gray-900 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

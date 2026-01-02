import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const portfolioData = [
    { month: 'Янв', value: 100000 },
    { month: 'Фев', value: 105000 },
    { month: 'Мар', value: 103000 },
    { month: 'Апр', value: 112000 },
    { month: 'Май', value: 118000 },
    { month: 'Июн', value: 125000 },
    { month: 'Июл', value: 122000 },
    { month: 'Авг', value: 130000 },
    { month: 'Сен', value: 135000 },
    { month: 'Окт', value: 142000 },
    { month: 'Ноя', value: 148000 },
    { month: 'Дек', value: 156000 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Что такое акции?',
      category: 'Основы',
      description: 'Акция — это ценная бумага, которая дает право владельцу на долю в компании. Покупая акции, вы становитесь совладельцем бизнеса и можете получать прибыль через дивиденды и рост цены акций.',
      icon: 'TrendingUp',
      color: 'bg-primary'
    },
    {
      id: 2,
      title: 'Облигации: безопасный доход',
      category: 'Основы',
      description: 'Облигация — долговая ценная бумага. Вы даете деньги в долг компании или государству, а они обязуются вернуть с процентами. Более стабильный инструмент, чем акции.',
      icon: 'Shield',
      color: 'bg-secondary'
    },
    {
      id: 3,
      title: 'Инвестиционные фонды',
      category: 'Продвинутый',
      description: 'ETF и ПИФы — это корзины из разных активов. Позволяют диверсифицировать риски: вместо одной акции покупаете сразу портфель из десятков компаний.',
      icon: 'Package',
      color: 'bg-primary'
    }
  ];

  const stockRecommendations = [
    { ticker: 'AAPL', name: 'Apple Inc.', price: '$175.43', change: '+2.3%', trend: 'up', rating: 'Покупать' },
    { ticker: 'GOOGL', name: 'Alphabet', price: '$139.82', change: '+1.8%', trend: 'up', rating: 'Держать' },
    { ticker: 'MSFT', name: 'Microsoft', price: '$378.91', change: '-0.5%', trend: 'down', rating: 'Покупать' },
    { ticker: 'TSLA', name: 'Tesla', price: '$242.15', change: '+3.7%', trend: 'up', rating: 'Держать' }
  ];

  const glossary = [
    {
      term: 'Акция',
      definition: 'Ценная бумага, дающая право на долю в капитале компании и получение части прибыли (дивидендов)'
    },
    {
      term: 'Облигация',
      definition: 'Долговая ценная бумага, по которой эмитент обязуется выплатить номинальную стоимость и проценты'
    },
    {
      term: 'Инвестиционный портфель',
      definition: 'Совокупность всех активов инвестора: акции, облигации, фонды, недвижимость и другие инструменты'
    },
    {
      term: 'Дивиденды',
      definition: 'Часть прибыли компании, которая выплачивается акционерам обычно раз в квартал или год'
    },
    {
      term: 'ETF',
      definition: 'Exchange Traded Fund — биржевой фонд, акции которого торгуются на бирже как обычные акции'
    },
    {
      term: 'Диверсификация',
      definition: 'Распределение инвестиций между разными активами для снижения рисков'
    }
  ];

  const news = [
    {
      title: 'ФРС США сохранила ключевую ставку',
      date: '2 января 2026',
      summary: 'Федеральная резервная система оставила процентную ставку на уровне 5.25-5.50%, что может повлиять на акции технологических компаний.'
    },
    {
      title: 'Рост индекса S&P 500 на фоне позитивной отчетности',
      date: '1 января 2026',
      summary: 'Американский фондовый рынок показал рост благодаря сильным квартальным отчетам крупнейших компаний.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-foreground">ИнвестОбучение</h1>
            </div>
            <div className="hidden md:flex space-x-1">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'education', label: 'Обучение', icon: 'BookOpen' },
                { id: 'news', label: 'Новости', icon: 'Newspaper' },
                { id: 'recommendations', label: 'Рекомендации', icon: 'Star' },
                { id: 'glossary', label: 'Словарь', icon: 'Book' },
                { id: 'portfolio', label: 'Портфель', icon: 'Briefcase' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="text-center py-12">
              <h2 className="text-5xl font-bold mb-4 text-foreground">
                Научись инвестировать правильно
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Пошаговое обучение основам инвестирования, актуальные новости рынка и рекомендации по акциям для начинающих инвесторов
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" onClick={() => setActiveSection('education')} className="flex items-center space-x-2">
                  <Icon name="BookOpen" size={20} />
                  <span>Начать обучение</span>
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('recommendations')} className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} />
                  <span>Рекомендации</span>
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('education')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle>Обучение</CardTitle>
                  <CardDescription>Статьи и материалы для начинающих</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('recommendations')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="LineChart" size={24} className="text-secondary-foreground" />
                  </div>
                  <CardTitle>Рекомендации</CardTitle>
                  <CardDescription>Какие акции стоит рассмотреть</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('glossary')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="BookMarked" size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle>Словарь</CardTitle>
                  <CardDescription>Все термины простыми словами</CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'education' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Icon name="BookOpen" size={40} className="text-primary" />
              <div>
                <h2 className="text-4xl font-bold">Обучающие материалы</h2>
                <p className="text-muted-foreground">Изучите основы инвестирования</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className={`w-16 h-16 ${article.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon name={article.icon} size={32} className="text-white" />
                    </div>
                    <Badge className="w-fit mb-2">{article.category}</Badge>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.description}</p>
                    <Button variant="link" className="mt-4 p-0">
                      Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Icon name="Newspaper" size={40} className="text-primary" />
              <div>
                <h2 className="text-4xl font-bold">Новости рынка</h2>
                <p className="text-muted-foreground">Актуальные события и аналитика</p>
              </div>
            </div>

            <div className="space-y-4">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                        <p className="text-muted-foreground">{item.summary}</p>
                      </div>
                      <Badge variant="outline" className="ml-4">
                        <Icon name="TrendingUp" size={14} className="mr-1" />
                        Новость
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'recommendations' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Icon name="Star" size={40} className="text-secondary" />
              <div>
                <h2 className="text-4xl font-bold">Рекомендации по акциям</h2>
                <p className="text-muted-foreground">Акции, которые стоит рассмотреть</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Топ акций на сегодня</CardTitle>
                <CardDescription>Данные обновлены 2 января 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stockRecommendations.map((stock) => (
                    <div key={stock.ticker} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-primary">{stock.ticker.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{stock.ticker}</p>
                          <p className="text-sm text-muted-foreground">{stock.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="font-semibold text-lg">{stock.price}</p>
                          <p className={`text-sm ${stock.trend === 'up' ? 'text-secondary' : 'text-destructive'}`}>
                            {stock.change}
                          </p>
                        </div>
                        <Badge variant={stock.rating === 'Покупать' ? 'default' : 'secondary'}>
                          {stock.rating}
                        </Badge>
                        <Icon 
                          name={stock.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                          className={stock.trend === 'up' ? 'text-secondary' : 'text-destructive'}
                          size={24}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'glossary' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Icon name="Book" size={40} className="text-primary" />
              <div>
                <h2 className="text-4xl font-bold">Словарь терминов</h2>
                <p className="text-muted-foreground">Все понятия простым языком</p>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {glossary.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-semibold">
                        {item.term}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.definition}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'portfolio' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <Icon name="Briefcase" size={40} className="text-secondary" />
              <div>
                <h2 className="text-4xl font-bold">Мой портфель</h2>
                <p className="text-muted-foreground">Отслеживайте свои инвестиции</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Общая стоимость</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">₽156 000</p>
                  <p className="text-sm text-secondary mt-2">+56% за год</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Доходность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-secondary">+56%</p>
                  <p className="text-sm text-muted-foreground mt-2">За всё время</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Активы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground mt-2">Позиций в портфеле</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>График роста портфеля</CardTitle>
                <CardDescription>Динамика стоимости за последние 12 месяцев</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={portfolioData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="month" 
                        className="text-sm"
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      />
                      <YAxis 
                        className="text-sm"
                        tick={{ fill: 'hsl(var(--muted-foreground))' }}
                        tickFormatter={(value) => `₽${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number) => [`₽${value.toLocaleString('ru-RU')}`, 'Стоимость']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Структура портфеля</CardTitle>
                <CardDescription>Распределение активов по типам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Акции</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '60%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Облигации</span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: '30%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Фонды</span>
                      <span className="text-sm text-muted-foreground">10%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '10%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 ИнвестОбучение. Образовательный проект по основам инвестирования.</p>
          <p className="text-sm mt-2">Информация носит ознакомительный характер и не является инвестиционной рекомендацией.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
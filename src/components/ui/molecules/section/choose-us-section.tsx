import React from 'react'

import { Award, TrendingUp, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../atoms/card/card';

const ChooseUsSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white/80">Por Qué Elegirnos</h2>
            <p className="text-xl text-white/60">Experiencia y compromiso con el medio ambiente</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-primary">15+</CardTitle>
                <CardDescription className="text-lg">Años de Experiencia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Certificaciones internacionales en gestión ambiental
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-primary">500+</CardTitle>
                <CardDescription className="text-lg">Clientes Satisfechos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Empresas que confían en nuestros servicios
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold text-primary">10,000+</CardTitle>
                <CardDescription className="text-lg">Toneladas Recicladas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Impacto positivo en el medio ambiente cada año
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ChooseUsSection

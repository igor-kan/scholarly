
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const WorkflowDemo = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Research",
      description: "Share your research notes, datasets, or rough drafts with our AI system.",
      status: "completed"
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our AI analyzes your content and generates a structured paper outline with citations.",
      status: "completed"
    },
    {
      number: "03",
      title: "Peer Review",
      description: "Simulate expert peer review to identify strengths and areas for improvement.",
      status: "in-progress"
    },
    {
      number: "04",
      title: "Format & Submit",
      description: "Auto-format for target journals and submit to preprint servers or publications.",
      status: "pending"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Idea to Publication in 4 Steps
            </h2>
            <p className="text-xl text-gray-600">
              See how PaperlessThink transforms your research workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className={`h-full transition-all duration-300 ${
                  step.status === 'completed' ? 'border-green-200 bg-green-50' :
                  step.status === 'in-progress' ? 'border-blue-200 bg-blue-50' :
                  'border-gray-200 bg-white'
                }`}>
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                        step.status === 'completed' ? 'bg-green-600 text-white' :
                        step.status === 'in-progress' ? 'bg-blue-600 text-white' :
                        'bg-gray-300 text-gray-600'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          step.number
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Try the Demo Workflow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;

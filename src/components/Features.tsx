
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Users, Search, Upload, Book, Link } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "AI Research Drafting Engine",
      description: "Transform your research ideas into structured, well-written academic papers with intelligent AI assistance.",
      features: ["Smart outline generation", "Citation integration", "Multi-format export", "Real-time editing"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Users,
      title: "Peer Review Simulator",
      description: "Get expert-level feedback through our AI peer review system that mimics top journal reviewers.",
      features: ["Multi-reviewer simulation", "Field-specific feedback", "Rebuttal generation", "Acceptance prediction"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Search,
      title: "Literature Integration",
      description: "Seamlessly discover, organize, and cite relevant research from major academic databases.",
      features: ["Cross-platform search", "Auto-formatting", "Deduplication", "Smart recommendations"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Upload,
      title: "Publication Pipeline",
      description: "Streamline your submission process with automated formatting and journal matching.",
      features: ["Journal recommendations", "Auto-submission", "Status tracking", "Template formatting"],
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Research Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Replace entire layers of academic workflow with AI-powered tools that deliver publish-ready papers in days, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((item, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

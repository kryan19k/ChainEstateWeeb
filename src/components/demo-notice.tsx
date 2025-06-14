'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Info, AlertTriangle } from 'lucide-react';

export function DemoNotice() {
  return (
    <Card className="w-full max-w-4xl mx-auto mb-8 border-orange-200 bg-orange-50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
          <div className="space-y-3">
            <h3 className="font-semibold text-orange-800">Demo Environment</h3>
            <div className="text-orange-700 space-y-2">
              <p>
                This is a fully functional demo of the CMS signup system with security features:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Password Hashing:</strong> Uses bcrypt with 12 rounds</li>
                <li><strong>Form Validation:</strong> Strong password requirements enforced</li>
                <li><strong>Email Verification:</strong> Automated verification emails (demo mode)</li>
                <li><strong>reCAPTCHA Protection:</strong> Requires configuration (see setup)</li>
                <li><strong>In-Memory Database:</strong> Data resets on server restart</li>
              </ul>
            </div>

            <div className="bg-orange-100 rounded-lg p-4 mt-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-orange-800">Setup Required:</p>
                  <p className="text-orange-700 text-sm mt-1">
                    To enable reCAPTCHA and email sending, configure the environment variables in
                    <code className="bg-orange-200 px-1 rounded">.env.local</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Ops! E-mail ou senha incorretos'], 401);
        }
        $result = (object) array();

        $result->user = auth('api')->user();
        $result->token = $token;
        return response()->json($result);

    }

    public function me()
    {
        return response()->json(auth('api')->user());
    }

    public function logout(Request $request) {
        try {
            $this
            ->user
            ->logout($request->input('token'));
        } catch (\Throwable|\Exception $e) {
            return ResponseService::exception('users.logout',null,$e);
        }

        return response(['status' => true,'msg' => 'Deslogado com sucesso'], 200);
    }
    
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 180
        ]);
    }

}
